from pydantic import BaseModel

class ProjectRequest(BaseModel):
    description: str
from pydantic import BaseModel

class ProjectRequest(BaseModel):
    description: str


class AnalysisResponse(BaseModel):
    users: int
    storage: str
    database: str
    ai_required: bool
    recommended_provider: str
    aws_cost: int
    azure_cost: int
    gcp_cost: int
    confidence: int
    summary: str
    savings: int