# React Profile Card PDF Generator

This project is a React application developed following the precise requirements of the Ta3leem task. It allows users to view a basic profile card and download it as a PDF. The project uses Tailwind CSS for styling and integrates `html2canvas` and `jsPDF` for PDF generation.

## Table of Contents

- [React Profile Card PDF Generator](#react-profile-card-pdf-generator)
	- [Table of Contents](#table-of-contents)
	- [Features](#features)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Components](#components)
		- [Profile](#profile)
		- [Edit Profile](#edit-profile)
		- [Generate PDF](#generate-pdf)
	- [Localization](#localization)
	- [Styling](#styling)
	- [Dependencies](#dependencies)
	- [Limitations](#limitations)

## Features

- Display a profile card with user details and an image.
- Download the profile card as a PDF.
- Support for multiple languages (i18next integration).
- Responsive design using Tailwind CSS.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-profile-card-pdf-generator.git
   cd react-profile-card-pdf-generator
   ```

2. Install the dependencies:
   Yarn
   ```bash
   yarn
   ```
   NPM
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   yarn start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.

2. The profile card will be displayed with user details and an image.

3. Click the "Download PDF" button to download the profile card as a PDF.

## Components

### Profile

### Edit Profile

### Generate PDF

## Localization

The project uses i18next for localization. Update the translation files in the public/locales directory to add or modify translations.

## Styling

The project uses Tailwind CSS for styling. Modify the tailwind.config.js file to customize the theme and styles.

## Dependencies

1. React: Frontend library for building user interfaces.
2. Tailwind CSS: Utility-first CSS framework for styling.
3. i18next: Internationalization framework for handling translations.
4. Formik: Form management library.
5. html2canvas: Library for capturing HTML elements as canvas images.
6. jsPDF: Library for generating PDF documents in the browser.

## Limitations

The generated PDF is not vectorized but is instead a raster image of the profile card. This limitation arises due to the use of `html2canvas` to capture the HTML content as an image. A better approach is to use a vectorized method using Node.js to handle PDF generation, but it falls out of the scope of the task.

State management is very basic using React local state management that is not sustainable in a real-life application but was chosen based on the simplicity of the requirements.
