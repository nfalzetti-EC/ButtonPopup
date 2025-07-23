# URL Redirection Page - For Nitpicky URL's that have special behavior like popups, flows etc IDRK why the link just does not work from sharepoint. 
# site us.sandata.com would not open properly from a link on sharepoint. SharePoint does not natively support .html files

This project provides a simple HTML page designed to open a specific URL in a new browser tab when the github URL.io page is visited. 
It is intended to work around limitations in platforms like SharePoint, which do not support opening special links (such as popups or new windows) directly from `.html` or `.aspx` files.


## Purpose

Some web applications, like Sandata, require their login pages to be opened in a new browser window or tab. While SharePoint supports opening in a new tab, it does not properly open the popup window attached to the destination URL
, so this project hosts a standalone HTML page on GitHub Pages to handle the redirect and properly open a new tab for the URL to open. 

## How It Works

When the page is loaded, it automatically simulates a user click on a hidden link to open the following URL in a new tab:

## Usage
1. This ensures compatibility with browsers that block popups unless triggered by user interaction.
2. Clone or fork
3. Change URL in .html
4. Turn on github pages to ROOT
5. Share the Github page URL
6. Whenever a user visits the Github page URL they will be redirected to your destination link in a new tab
