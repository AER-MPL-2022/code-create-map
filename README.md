# Create Your Map 🗺️
This project guides you through using Tiled, a flexible and powerful tile map editor. Tiled is an open-source software, easy to use, and suitable for creating maps for video games and other applications. It supports a wide range of map formats and offers features for managing layers, objects, and custom properties.

Download 📥
You can download Tiled from the following link:
[Donwload Here](https://thorbjorn.itch.io/tiled/download/eyJpZCI6Mjg3NjgsImV4cGlyZXMiOjE2ODEyNTA3NjJ9.POqFr1km6fsyawRy3eiqgxOU70k%3d)

# Installation 🔧
Follow these steps to install Tiled on your Linux system:

 - 1 Download the `.AppImage` file from the link above.

 - 2 Open a terminal and navigate to the folder where the downloaded file is located. For example:

 `cd ~/Downloads`

 - 3 Make the `.AppImage` file executable using the chmod command:
`chmod 777 Tiled-<version>.AppImage`

 - 4 Execute the `.AppImage` file to launch Tiled:
`./Tiled-<version>.AppImage`

# Usage 🎮
After installing and launching Tiled, you can start creating and editing tile maps for your projects. For more information on using Tiled, check out the official documentation: https://doc.mapeditor.org/en/stable/

# Exporting Tiled Layers to JSON ❗️🔺📑
Before using the script to convert your layers, don't forget to export the Tiled layers in JSON format. Here's how to do it:

Go to "File" > "Export As" > "JSON". 📁
Select the folder where you want to save the JSON file and give it a name. 📝
Click on "Save" to export the layers in JSON format. 💾
Once you have exported your Tiled layers in JSON, you can convert them with the script as described in the next steps. 📂🚀

# 🌟 Map Layer Converter 🌟
This script converts JSON map layers into individual text files, making it easier to view and edit each layer separately. The script reads the JSON file containing the map layers, formats the data, and outputs the formatted data into separate text files. It's perfect for game developers or anyone working with 2D map data! 🎮🗺️

# 🚀 Getting Started
To use or modify the script, follow these steps:

- 1️⃣ Install the required packages
This script requires Node.js to be installed on your machine. You can download Node.js from [here](https://nodejs.org/en).

- Once you have Node.js installed, navigate to the repository folder and run:

 - bash `npm install` This will install the required packages for the script to run.

- 2️⃣ Modify the script (optional)
Open the TiledMapToTxt.js file in your favorite code editor and modify the script as needed. Don't forget to save your changes! 💻🔧

- 3️⃣ Run the script
To run the script, navigate to the repository folder in your terminal or command prompt and run:

- bash `node TiledMapToTxt.js` The script will read the JSON file, process the layers, and create separate text files for each layer. 📄✨

# 🔧 How to Modify the Script
The script is designed to be easy to modify. Below are some areas you may want to change:

- JSON file path: To use a different JSON file, update the jsonFilePath variable with the path to your desired file.
- Layer formatting: If you want to change the way the layers are formatted, update the formatLayerData function with your desired formatting logic.
- Output file naming: To change the naming convention for the output files, modify the layerName variable in the createTxtFilesFromJsonLayers function.

Enjoy working with your map layers, and happy coding! 🎈🎉

# RPG Layer Management and Collision Detection 🎮🗺️
This guide will explain how to use layers in your RPG project to create depth and manage collisions with walls and other objects. Additionally, it will cover the benefits of the script that converts layers from JSON to TXT, enabling easy collision handling in the game using an int ** data structure.

# Using Layers for Depth and Collision in RPGs 🏞️🔒
Layers in your RPG project can serve several purposes, such as:

- Depth management: By organizing textures and objects on different layers, you can create a sense of depth in the game world. For example, you can place the player character on a middle layer, allowing them to walk behind certain textures, like trees or walls, on upper layers, and in front of textures on lower layers.

- Collision detection:
Using dedicated layers for objects or walls that the player should not be able to pass through, you can manage collision detection more effectively. By keeping track of these collision layers, you can prevent the player character from walking through walls or other solid objects.

# JSON to TXT Conversion Script Utility 🔄📄
The script provided helps transform the layer data from JSON format (exported from Tiled) to TXT. This conversion has several advantages:

Easy integration: The script converts the JSON layers into an int ** data structure in a TXT file. This structure can be easily integrated into your game engine, allowing you to create a direct link between the game map and the associated textures.

Collision handling: Once the layers are in the int ** format, you can effectively handle collision detection in your game. By checking the values in the int ** structure, you can determine if the player character is attempting to walk into a solid object or wall, and prevent them from doing so.

By following these guidelines and utilizing the provided script, you can create a more immersive and functional RPG experience. Happy game development! 🎉🕹️
