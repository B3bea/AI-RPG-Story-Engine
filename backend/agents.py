from crewai import Agent
from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.9)

world_architect = Agent(
    role="World Architect",
    goal="Create a rich and immersive game world based on the given theme.",
    backstory="Expert in world-building and environmental storytelling.",
    llm=llm,
    verbose=True
)

character_designer = Agent(
    role="Character Designer",
    goal="Design compelling characters that fit within the game world and contribute to the story.",
    backstory="Skilled in character development and narrative design.",
    llm=llm,
    verbose=True
)

conflict_creator = Agent(
    role="Conflict Creator",
    goal="Develop engaging conflicts that drive the story forward and challenge the characters.",
    backstory="Experienced in crafting dramatic tension and plot twists.",
    llm=llm,
    verbose=True
)

game_master = Agent(
    role="Game Master",
    goal="Oversee the story development process, ensuring coherence and integration of all elements.",
    backstory="Master storyteller with a deep understanding of narrative structure.",
    llm=llm,
    verbose=True
)

