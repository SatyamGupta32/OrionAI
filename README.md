# AI Content Generator

## Overview

AI Content Generator is a Next.js application that utilizes cutting-edge technologies to provide users with AI-driven content creation tools. The application is designed to help users generate various types of content, including blog posts, social media updates, and more.

## Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Clerk**: User authentication and management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Lucid**: A library for building interactive UI components.
- **Shadcn**: UI components built for Tailwind CSS.
- **PostgreSQL**: A relational database for data storage.
- **TypeScript**: A superset of JavaScript that adds static types.

## Features

- User authentication with Clerk.
- Responsive design with Tailwind CSS.
- Interactive UI components using Lucid and Shadcn.
- Data management with PostgreSQL.
- Type-safe development with TypeScript.

## Basic Routes

- **`/`**: Home page of the application.
- **`/history`**: View the history of generated content.
- **`/create`**: Create new content using AI tools.

## Getting Started

Follow these steps to set up the application locally:

### Prerequisites

Make sure you have Node.js and npm or yarn installed.

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project folder:

    ```bash
    cd ai-content-generator
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Setting up Environment Variables

Create a `.env.local` file in the root directory:

```bash
touch .env.local
