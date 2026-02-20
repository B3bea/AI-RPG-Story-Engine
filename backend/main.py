from crew import run_game
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class GameRequest(BaseModel):
    theme: str

@app.post("/run_game")
def run_game_endpoint(request: GameRequest):
    result = run_game(request.theme)
    return {"result": result}