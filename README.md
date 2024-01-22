# Challenge React.js ![](https://pasteboard.co/byC31Sq5OMgz.png)

This challenge was created and bootstrapped with Create Next App.

# Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- Node.js v20 (https://nodejs.org/)
- pnpm (https://pnpm.io/) - Please install pnpm as your package manager.

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:

  ```bash
  git clone git@github.com:Miguelslo27/react-challenge.git
  ```

2. Navigate to the project directory:

  ```bash
  cd react-challenge
  ```

3. Install dependencies using pnpm:

  ```bash
  pnpm install
  ```

## Development

To run the development server, use the following command:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Production

To build and start the production server, run the following commands:

```bash
pnpm build
pnpm start
```

The production server will be available at `http://localhost:3000`.

## Docker

To run the project using Docker, follow these steps:

1. Build the Docker image:

  ```bash
  docker build -t react-challenge .
  ```

2. Run the Docker container in the background:

  ```bash
  docker run -d -p 3000:3000 react-challenge
  ```

The application will be accessible at `http://localhost:3000`.

## Additional Information

- For more information on Next.js, visit [Next.js Documentation](https://nextjs.org/docs).
- For more information on pnpm, visit [pnpm Documentation](https://pnpm.io/).

## Visit the Deployed Project

While the initial requirement was to deploy the project on GitHub Pages for public accessibility, I encountered an issue with the Next.js build. As a result, I opted to deploy it on Vercel, the native cloud provider for Next.js applications.

- Explore the Breakify App on [Vercel](https://react-challenge-ten-flame.vercel.app/)
