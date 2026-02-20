from crewai import Crew
from tasks import create_tasks
from agents import world_architect, character_designer, conflict_creator, game_master

def run_game(theme):

    tasks = create_tasks(theme)

    crew = Crew(
        agents=[world_architect, character_designer, conflict_creator, game_master],
        tasks=tasks,
        verbose=True
    )

    result = crew.kickoff()
    return result