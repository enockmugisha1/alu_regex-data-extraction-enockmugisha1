# 🚀 Regex Data Extraction Project

Welcome to your exciting journey of mastering data extraction with Regular Expressions! This project is your playground to unleash the power of JavaScript and Regex to extract meaningful data from large text files.

---

## 🛠️ Requirements
- Ensure Node.js is installed on your machine.

## 📥 Installation
1. **Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/alu_regex-data-extraction-yourusername.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd alu_regex-data-extraction-yourusername
   ```

---

## 🚀 How to Run the Code
✨ **Let’s extract some data!** ✨

1. Prepare your input text file with data to be extracted (e.g., `test_data.txt`).
2. Run the script and save your extracted data into a JSON file using:
   ```bash
   ./extract.js test_data.txt > data.json
   ```
3. Open `data.json` and witness your extracted data in all its glory! ✨

---

## 📄 Example Input (`test_data.txt`)
```
Emails:
e.mugisha4@alustudent.com
contact@mywebsite.net

URLs:
https://myportfolio.dev

Phones:
(987) 654-3210

Credit Cards:
1111 2222 3333 4444

Times:
12:45 PM
```

---

## 🎉 Example Output (`data.json`)
```json
{
  "emails": ["e.mugisha4@alustudent.com", "contact@mywebsite.net"],
  "urls": ["https://myportfolio.dev"],
  "phones": ["(987) 654-3210"],
  "cards": ["1111 2222 3333 4444"],
  "time": ["12:45 PM"]
}
```

---

## 🔥 Why This Project?
This project is not just about writing code; it’s about sharpening your skills, solving real-world problems, and becoming a Regex master. Each time you run this project, you’re one step closer to becoming the Full Stack Developer you aspire to be! 💻🚀

---


✨ **Happy Coding and Keep Pushing Forward!** ✨

