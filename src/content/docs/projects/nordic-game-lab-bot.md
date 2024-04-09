---
title: Nordic Game Lab Bot
description: "**NordicGameLabBot** is an efficient and versatile web crawler
  designed by **Nordic Game Lab LLC**. Its primary purpose is to collect data
  from websites, analyze content, and provide valuable insights for various
  applications. Whether you're a developer, researcher, or data enthusiast, this
  documentation will guide you through the bot's features, usage, and best
  practices."
---
## Features





1. **Robust Crawling Engine**: NordicGameLabBot employs a powerful crawling engine that efficiently traverses websites, following links, and collecting relevant information.





2. **Customizable Configuration**: You can fine-tune the bot's behavior by adjusting parameters such as crawl frequency, depth, and user-agent settings.





3. **Data Extraction**: Extract specific data points, such as text content, images, metadata, or structured data (e.g., JSON, XML).





4. **Respectful Crawling**: NordicGameLabBot adheres to web standards and respects robots.txt files. However, if a site owner wishes to exclude their site from crawling, they can follow the instructions below.





## Usage





1. **Configuration**:

    - Create a `config.js` file in your project directory.

    - Use the following example configuration as a starting point:





        ```javascript

        module.exports = {

          toCrawlUrl: "https://www.nordicgamelab.org",

          urlInclude: "nordicgamelab.org",

          noCrawl: [

            "/cdn-cgi/",

            "account",

            "/callback",

            "/demo",

            "fresh",

            "/register",

            "mailto:",

            "tel:",

            "/search",

            "/login",

            "linkedin",

            "google",

            "facebook",

            "twitter",

            "instagram",

            "youtube",

            "reddit",

            "discord",

            "admin",

            "dribbble",

            "status",

            "link.nordicgamelab.org"

          ],

        };

        ```





    - Customize the configuration according to your specific requirements.





2. **Run the Bot**:

    - Open your terminal or command prompt.

    - Execute the following command to run the bot using `npx`:





        ```

        npx @nordic-game-lab/web-crawler@latest --config config.js

        ```





    - The bot will automatically install any necessary dependencies and execute based on the provided configuration.





3. **Output**:

    - By default, the bot will display the crawled data in the console.





## Notice to Website Owners





If you are a website owner and have identified that **NordicGameLabBot** has crawled your site, but you wish to exclude it from future crawls, please follow these steps:





1. Create a `robots.txt` file in your website's root directory.

2. Add the following lines to the `robots.txt` file:





    ```

    User-agent: NordicGameLabBot

    Disallow: /

    ```





3. If you have any specific requests or need further assistance, please contact us at **bots@nordicgamelab.org**.





## Feedback and Support





We welcome feedback, bug reports, and feature requests. Feel free to open issues on our GitHub repository or reach out to our support team.




