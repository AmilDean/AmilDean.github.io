import os
import re

# Function to format title to lowercase with hyphens between words
def format_title(title):
    formatted_name = re.sub(r'[^\w\s-]', '', title).strip().replace(' ', '-').lower()
    return formatted_name

# Function to convert filenames to proposed format for specified anime titles (with '1' appended)
def convert_filenames():
    anime_titles = [
        "WataMote",
        "Amagami SS",
        "Devil is a part-timer",
        "Tanaka-kun wa Itsumo Kedaruge",
        "K-On",
        "Re:Zero",
        "BTOOOM",
        "ReLife",
        "D-Frag",
        "The Melancholy of Haruhi Suzumiya",
        "Recovery of an MMO Junkie",
        "Anti-Magic Academy",
        "Blend S",
        "School-Live",
        "Hand-Shakers",
        "Anime-Gataris",
        "Imouto sae Ireba Ii",
        "Ramen Daisuki Koizumi-San",
        "DanMachi",
        "Karakai Jozu No Takagi-San",
        "Chronicles of the Going Home Club",
        "Aho-Girl",
        "ALDNOAH.ZERO",
        "THE IDOLM@STER CINDERELLA GIRLS",
        "PERSONA5",
        "Snow White with the Red Hair",
        "DARLING in the FRANXX",
        "Welcome to the N-H-K",
        "My Wife is the Student Council President",
        "RErideD - Derrida, who leaps though time",
        "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
        "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
        "NieR",
        "The Eminence in Shadow",
        "The Ice Guy and His Cool Female Colleague",
        "Tomo-chan Is a Girl!"
    ]

    renamed_count = 0
    for filename in os.listdir('.'):  # Use '.' to indicate the current directory
        if filename.endswith('1.jpg'):  # Only operate on filenames with '1.jpg' suffix
            original_title = filename[:-6]  # Remove '1.jpg' from the end
            for title in anime_titles:
                if title.lower() in original_title.lower():  # Case-insensitive match
                    formatted_name = format_title(title) + '.jpg'
                    if formatted_name != filename:  # Ensure new filename is different
                        try:
                            os.rename(os.path.join('.', filename), os.path.join('.', formatted_name))
                            print(f'Renamed: {filename} -> {formatted_name}')
                            renamed_count += 1
                        except FileExistsError:
                            print(f'Error: Cannot rename {filename} to {formatted_name}. File already exists.')
                    break  # Break after first match to avoid renaming multiple times for the same file

    print(f'Total files renamed: {renamed_count}')

# Call the function to convert filenames
convert_filenames()
