# Amply Media Case Study

<img src="https://i.imgur.com/1NNkRiO.jpg">

The completed case study can be found at [https://barrow-amply-media.netlify.com](https://barrow-amply-media.netlify.com). Alternatively, this repository can be cloned and run at **localhost:8080**

`npm install`

`npm run start`

# Tracking Signups

Google Analytics was used to explicitly track the signup button clicks, which has the added benefit of tracking overall page views.

![Analytics Sample](https://i.imgur.com/fuZ7gyc.png)

# Design Choices

## Frameworks and Tool Usage

-   This project was made using ReactJS and Redux. Although the company primarily uses Angular, I realized that in order to deliver the highest quality code in the timeliest manner, it would be best to use the framework/library I have the most experience with. The time and effort to brush up on and update my Angular knowledge would lead to potential errors. I am more than ready to dive back into Angular and have acquired learning material on version 7 already.
-   The styling is written in the SCSS version of SASS to make use of nested elements, variables, and advanced functions.
-   The code utilizes TypeScript to drastically reduce runtime errors and self document components and data interaction.
-   A webpage manifest is created to generate metadata for the HTML file, match the theme of the site, and provide some offline functionality.
-   Webpack was used to transpile code using ts-loader and babel-loader. HTML, CSS, and JS are minified to speed the end user's delivery.

## Data Manipulation

-   Temperatures were rounded to the nearest whole digit to reduce the complexity and appearance of clutter. People rarely mention the weather to the tenths degree, so it was omitted.

-   Zipcodes are validated by regex to prevent any user errors.

-   Signup button is only active when terms are agreed upon and zipcodes are valid. This prompts users to find the problem, which should lead to reading the terms.

## Style Choices

<p align="center">
<img src="https://i.imgur.com/LYdcQYm.jpg" width=100>
<img src="https://i.imgur.com/UMj7EVZ.jpg" width=100>
<img src="https://i.imgur.com/sOLYtSf.jpg" width=100>
</p>

-   The color gradient will change depending on the temperature (0-50 degrees blue/purple, 50-70 yellow/green, 70+ red/orange). This gives the user the feeling of a truly responsive site that does more than just pull data from somewhere, it immerses you in it.

-   The background of header is made with [ParticlesJS](https://vincentgarreau.com/particles.js/). The constant soothing motion catches interest without being too overwhelming.

-   The current weather and weekly forecast have contrasting colors so that attention is drawn to main feature while not detracting from the feeling of consistency and completeness in a weather application. Inclusion of a weekly forecast promotes users to check back in the future to verify plans for their week.

-   The Call To Action is centered on Desktop, right below the current weather, in order to group these two ideas together. On mobile, I felt it was more important to showcase as many features as possible before attempting to engage the user, which has been shown to increase conversion rates.

-   The Layout of the actual weather is based on multiple top weather providing applications and sources, it is clean and grouped into the most relevant categories. On Mobile and repeated for the forecast, the first row is the concise information (icon, temperature), then the description for a bit more detail, followed by the high/low forecast. On Desktop, the left side describes the weather while the right enummerates it.

-   Fonts

    -   Title and Call To Action - Sparse non-standard font usage highlights the most important areas of the site. The Call To Action matches the header's gradient using text-fill-color.

    -   Current Location - The matching gradient background and contrasting text emphasize the user's current location, giving a personalized feel.
