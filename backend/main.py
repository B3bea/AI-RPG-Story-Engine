from crew import run_game
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GameRequest(BaseModel):
    theme: str
    notes: str | None = None

@app.post("/run_game")
def run_game_endpoint(request: GameRequest):
    result = run_game(request.theme, request.notes)
    return {"result": result.raw}