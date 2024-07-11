import os

# Function to rename files by appending "1" at the end for specified anime titles
def rename_files():
    directory = '.'  # Use '.' for the current directory (already set by cd command)
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
    for filename in os.listdir(directory):
        if filename.endswith('.jpg'):
            original_title = filename[:-5]  # Remove '.jpg' from the end
            for title in anime_titles:
                if title.lower() in original_title.lower():  # Case-insensitive match
                    new_filename = original_title + '1.jpg'
                    os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))
                    print(f'Renamed: {filename} -> {new_filename}')
                    renamed_count += 1
                    break  # Break after first match to avoid renaming multiple times for the same file

    print(f'Total files renamed: {renamed_count}')

# Call the function to rename files
rename_files()
