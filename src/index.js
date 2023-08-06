const fs = require("fs");
const path = require("path");

require('dotenv').config();

const directory = process.env.DIRECTORY_PATH;

function moveFileToExtensionFolder(directory, file) {
    const filePath = path.join(directory, file);
    const extension = path.extname(file).substring(1);  
    const folderPath = path.join(directory, extension);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const destPath = path.join(folderPath, file);
    fs.rename(filePath, destPath, err => {
        if (err) {
            console.error(`Error moving ${file}:`, err);
        }
    });
}

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    files.forEach(file => moveFileToExtensionFolder(directory, file));
});
