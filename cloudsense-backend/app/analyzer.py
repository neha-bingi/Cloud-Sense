from app.extractor import extract_features


def analyze_description(description: str):

    features = extract_features(description)

    project = features["project_type"]

    if project == "food_delivery":
        return {
            "users": 50000,
            "storage": "High",
            "database": "PostgreSQL",
            "ai_required": features["ai"],
            "recommended_provider": "GCP",
            "aws_cost": 620,
            "azure_cost": 690,
            "gcp_cost": 580,
            "confidence": 93,
            "savings": 24,
            "summary": "Food delivery platform with scalable backend and optional AI-powered recommendations. Google Cloud is recommended for scalability and AI services."
        }

    elif project == "ecommerce":
        return {
            "users": 25000,
            "storage": "Medium",
            "database": "MySQL",
            "ai_required": features["ai"],
            "recommended_provider": "AWS",
            "aws_cost": 320,
            "azure_cost": 380,
            "gcp_cost": 350,
            "confidence": 90,
            "savings": 18,
            "summary": "E-commerce platform requiring scalable databases and reliable compute. AWS is recommended."
        }

    elif project == "education":
        return {
            "users": 30000,
            "storage": "Medium",
            "database": "PostgreSQL",
            "ai_required": features["ai"],
            "recommended_provider": "GCP",
            "aws_cost": 250,
            "azure_cost": 280,
            "gcp_cost": 220,
            "confidence": 91,
            "savings": 25,
            "summary": "Education platform optimized for moderate traffic and lower costs."
        }

    elif project == "healthcare":
        return {
            "users": 20000,
            "storage": "High",
            "database": "PostgreSQL",
            "ai_required": features["ai"],
            "recommended_provider": "Azure",
            "aws_cost": 420,
            "azure_cost": 380,
            "gcp_cost": 450,
            "confidence": 88,
            "savings": 15,
            "summary": "Healthcare application requiring secure and compliant cloud infrastructure."
        }

    elif project == "social_media":
        return {
            "users": 100000,
            "storage": "Very High",
            "database": "MongoDB",
            "ai_required": features["ai"],
            "recommended_provider": "AWS",
            "aws_cost": 950,
            "azure_cost": 1100,
            "gcp_cost": 980,
            "confidence": 90,
            "savings": 20,
            "summary": "Large-scale social media platform with high traffic and storage needs."
        }

    return {
        "users": 10000,
        "storage": "Low",
        "database": "PostgreSQL",
        "ai_required": features["ai"],
        "recommended_provider": "Azure",
        "aws_cost": 180,
        "azure_cost": 160,
        "gcp_cost": 170,
        "confidence": 85,
        "savings": 12,
        "summary": "General web application with basic cloud infrastructure requirements."
    }