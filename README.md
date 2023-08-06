# Downloads Cleaner for Windows

This project contains a simple Node.js script that automatically cleans up the Downloads folder on a Windows system upon startup. The code sorts the files in your Downloads folder based on their file extensions into separate subfolders.

## Prerequisites

- Node.js (version 12 or higher) installed on your system

## Installation

1. Clone this repository or download the code and extract it on your local system.

```
git clone https://github.com/nikl0n/downloads-cleaner-windows.git
```

2. Navigate to the project directory and run `npm install` to install the required dependencies.

```
cd downloads-cleaner-windows
npm install
```

## Setup Environment Variables
1. Copy the `.env.example` file and rename it to `.env`:
```
cp .env.example .env
```
2. Open the `.env` file in your favorite editor and set the `DIRECTORY_PATH` variable to the path where you want to organize the files.

## Usage

Run the script manually by entering the following command in the project directory:

```
node index.js
```

To automatically run the script upon Windows startup, move the `index.bat` file in the Startup folder. The path to the Startup folder is typically:

```
C:\Users\YourUsername\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```

Once the environment variable is set and the program is run, the utility will organize the files in the specified directory into sub-directories based on their extensions.

For example, `.jpg` files will be moved to a `jpg/` sub-directory, `.txt` files to a `txt/` sub-directory, and so on.

## Contributing

If you have any suggestions for improvements or bug fixes, please create a pull request or open an issue on Github.