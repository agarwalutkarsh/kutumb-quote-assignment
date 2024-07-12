import MainContextWrapper from '@/components/ContextApi/MainContext'
import Nav from '@/components/Nav'
import '@/styles/globals.css' // This will apply the css to all the pages

export const metadata = {
  title: 'Utkarsh Agarwal - Kutumb Assignment',
  description: 'Quotes Assignment - Next Js',
}

const RootLayout = ({ children }) => { // this is the root layout which is a wrapper for every page
  return (
    <html lang="en">
      <body className='font-inter'>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <MainContextWrapper>
              <Nav />
            {children}
          </MainContextWrapper>
        </main>
      </body>
    </html>
  )
}

export default RootLayout