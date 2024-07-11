import requests
import os
import re

# AniList API endpoint for searching anime titles
base_url = 'https://graphql.anilist.co'

# Function to search for anime title and retrieve image URL
def get_anime_image(title):
    query = '''
    query ($search: String) {
      Media(search: $search, type: ANIME) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
    '''
    variables = {
        'search': title
    }
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    
    try:
        response = requests.post(base_url, json={'query': query, 'variables': variables}, headers=headers)
        response.raise_for_status()  # Raise an exception for bad status codes
        data = response.json()
        anime = data.get('data', {}).get('Media')
        if anime:
            image_url = anime.get('coverImage', {}).get('large')
            return image_url
    except requests.exceptions.RequestException as e:
        print(f'Error fetching data for {title}: {e}')
    except Exception as e:
        print(f'Unhandled error for {title}: {e}')
    
    return None

# Function to sanitize filename
def sanitize_filename(filename):
    # Remove non-alphanumeric characters except spaces and dashes
    filename = re.sub(r'[^\w\s-]', '', filename)
    # Replace spaces with dashes
    filename = filename.replace(' ', '-')
    return filename

# Function to download and save image
def download_image(url, title):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes
        if response.status_code == 200:
            # Get sanitized filename
            filename = sanitize_filename(title)
            # Save image with sanitized filename
            with open(f'{filename}.jpg', 'wb') as f:
                f.write(response.content)
            print(f'Image downloaded: {filename}.jpg')
        else:
            print(f'Failed to download image from {url}')
    except requests.exceptions.RequestException as e:
        print(f'Error downloading image for {title}: {e}')
    except Exception as e:
        print(f'Unhandled error for {title}: {e}')
        return  # Return without saving if there's an error

# Example usage:
anime_titles = [
"Jellyfish can’t swim in the night",
		"Tonari no Yokai-san",
		"GO! GO! Loser Ranger!",
		"An Archdemon’s Dilemma",
		"WIND BREAKER",
		"Sand Land: The Series",
		"Boukyaku Battery",
		"Kaii to Otome to Kamikakushi",
		"Astro Note",
		"The Grimm Variations",
		"Ragna Crimson",
		"The Ossan Newbie Adventurer",
		"Alya Sometimes Hides Her Feelings Russian",
		"I Parry Everything",
		"Failure Frame",
		"Quality Assurance in Another World",
		"My Deer Friend Nokotan",
		"Dungeon People",
		"Sakuna: Of Rice And Ruin",
		"SHOSHIMIN",
		"The Elusive Samurai",
		"Dahlia in Bloom",
		"TASUKETSU",
		"A Journey Through Another World:Raising Kids"
]

for title in anime_titles:
    image_url = get_anime_image(title)
    if image_url:
        download_image(image_url, title)
    else:
        print(f'Image not found for {title}')
