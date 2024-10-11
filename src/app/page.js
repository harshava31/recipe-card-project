"use client";
import RecipeList from './RecipeList';

export default function Home() {
  return (
    <main>
      <h1>Restaurant Recipes</h1>
      <RecipeList />

      <footer style={footerStyle}>
        <p>Done by Harsha Vardhan Meka</p>
      </footer>

      <style jsx>{`
        h1 {
          text-align: center;
          margin-top: 20px;
          font-size: 2rem;
          color: #333;
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
      
    </main>
  );
}

const footerStyle = {
  marginTop: '50px',
  fontSize: '22px',
  color: '#666',
  textAlign: 'center',
  padding: '20px',
  borderTop: '1px solid #eee'
};
