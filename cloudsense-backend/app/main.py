from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models import ProjectRequest
from app.gemini_service import analyze_with_gemini

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://cloud-sense-three.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "CloudSense API Running"
    }


@app.post("/analyze")
def analyze_project(project: ProjectRequest):
    return analyze_with_gemini(project.description)