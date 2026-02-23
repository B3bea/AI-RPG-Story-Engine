from crewai import Task
from agents import world_architect, character_designer, conflict_creator, game_master

def create_tasks(theme):

    world_task = Task(
        description=f"""
            Theme: {theme}
            Create a rich and immersive game world based on the given theme. Consider the setting, culture, and environment to make it engaging and believable.
        """,
        expected_output="""
            A detailed description of the game world, including its setting, culture, and environment. This should provide a vivid backdrop for the story and inspire the other agents in their tasks.
        """,
        agent=world_architect
    )

    character_task = Task(
        description="""
            Based on the created world, design compelling characters that fit within the game world and contribute to the story. Consider their backgrounds, motivations, and relationships to make them interesting and relatable.
        """,
        expected_output="""
            A list of well-developed characters, each with a detailed description of their background, motivations, and relationships. These characters should be designed to fit seamlessly into the created world and drive the story forward.
        """,
        agent=character_designer
    )

    conflict_task = Task(
        description="""
            Develop engaging conflicts that drive the story forward and challenge the characters. Ensure the conflicts are meaningful and contribute to character development.
        """,
        expected_output="""
            A list of engaging conflicts that are meaningful and contribute to character development. These conflicts should be designed to challenge the characters and drive the story forward.
        """,
        agent=conflict_creator
    )

    game_master_task = Task(
        description="""
            Oversee the story development process, ensuring coherence and integration of all elements. Provide feedback and guidance to the other agents to maintain a cohesive narrative.
        """,
        expected_output="""
            A cohesive narrative that integrates the created world, characters, and conflicts. The Game Master should provide feedback and guidance to ensure all elements work together to create an engaging story.
            Game Master should also add emojis to the content to make it more engaging and visually appealing.
        """,
        agent=game_master
    )

    return [world_task, character_task, conflict_task, game_master_task]