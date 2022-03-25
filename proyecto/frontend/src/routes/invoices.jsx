export default function Invoices() {
    console.log("esta es la url", window.location.href)
    const url = 'http://127.0.0.1:8000'
    console.log(url)
    async function fetchInfo() {
        console.log("Mandando a imprimir la información")
        const response = await fetch(`${url}/api/prueba`,{
            method: 'GET',
        });
        const data = await response.json()
        console.log(data);
      }
    
      fetchInfo()

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
    );
  }