import os
import json

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_with_gemini(description: str):

    prompt = f"""
You are a senior cloud architect with expertise in AWS, Azure and Google Cloud.

Analyze the project requirements and extract workload characteristics.

summary should only describe the project.

Do not explain why a provider is recommended.

Recommendation reasoning must be returned separately.

Always returns in JSON format.

Analyze the following software project.

Project:
{description}

Return ONLY valid JSON.

Return exactly in this format:

{{
 
    "project_type": "",
    "users": 0,
    "storage": "",
    "database": "",
    "ai_required": false,

    "recommended_provider": "",

    "aws_cost": 0,
    "azure_cost": 0,
    "gcp_cost": 0,

    "confidence": 0,
    "savings": 0,
    
    "summary": "",
    "recommendation_reason": "",
    "lowest_cost_provider": "",
    "lowest_cost_reason": ""

}}

Rules:
- Return ONLY JSON.
- confidence must be an integer between 80 and 100.
- savings must be an integer between 5 and 40.
- users must be a realistic estimate based on the project description.
- storage must be one of: Low, Medium, High, Very High.
- database should be a suitable database technology.
- summary should be 2-3 concise sentences.
- summary should describe only the application's requirements.
- recommendation_reason should explain why the recommended provider is best suited for the workload.
- If the recommended provider is not the cheapest, explain why paying more is worthwhile.
- lowest_cost_provider should identify the provider with the lowest estimated monthly cost.
- lowest_cost_reason should explain when choosing the cheaper provider would be appropriate.
- Keep both explanations concise (2-x3 sentences each).
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    text = response.text.strip()

    # Remove markdown code fences if Gemini returns them
    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()
    elif text.startswith("```"):
        text = text.replace("```", "").strip()

    data = json.loads(text)
    costs = {
    "AWS": data["aws_cost"],
    "Azure": data["azure_cost"],
    "GCP": data["gcp_cost"],
    }

    lowest_provider = min(costs, key=costs.get)

    data["lowest_cost_provider"] = lowest_provider
   
    return data

   