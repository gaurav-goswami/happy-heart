export async function GET() {
    try {
      const apiKey = process.env.NEWS_API_KEY;
      const query = "diseases";
      const pageSize = 6;
  
      const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${apiKey}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        return new Response(JSON.stringify({
          message: "Failed to fetch health articles from NewsAPI"
        }), { status: response.status });
      }
  
      const data = await response.json();
  
      return new Response(JSON.stringify({ healthArticles: data.articles }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
  
    } catch (error) {
      console.error("Error fetching health articles:", error);
      return new Response(JSON.stringify({ message: "Internal server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  