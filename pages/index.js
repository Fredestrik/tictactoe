import Head from 'next/head'
import { Game } from "../components/game"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-100">
      <Head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/tictactoe.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center ">
        <h1 className="text-4xl font-bold py-3 px-2 my-7 border-2 rounded border-green-600 bg-green-200">
          <img src="/tictactoe.png" alt="icon" className="inline h-10 mx-2" />
          <span className="text-green-600">Tic</span><span className="text-green-700">Tac</span><span className="text-green-800">Toe</span>
        </h1>

        <Game />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
