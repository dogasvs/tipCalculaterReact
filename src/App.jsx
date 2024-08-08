import './App.css'

function App() {
  
  return (
    <div className='container'>
     <img src="/public/images/SPLITTER.svg" alt="logomuz, bölücü anlamına gelen yazi "></img>
      <Splitter />
   </div>
  )
}

function Splitter() {
  return(
    <div className="splitter">

    <div className="getinform">
      <div className="bill">
        <h1>Fatura</h1>
        <input type="number" placeholder="00.00" class="billInput" />
      </div>

      <div className="tip">
        <h1>Bahşiş miktarını seçiniz</h1>
        <div className="tip-select">
          <button>5</button>
          <button>10</button>
          <button>15</button>
          <button>25</button>
          <button>50</button>
          <input type="text" placeholder="ÖZEL" class="tipInput" />
        </div>
      </div>

      <div class="numberofpeople">
        <h1>Kişi Sayısı</h1>
        <input type="number" placeholder="0" class="numberofInput" />
      </div>
    </div>

    <div class="output">
      <div class="output-inform">
        <h1>Bahşiş Miktarı: <span class="tip-amount"></span></h1>
        <p>/ Kişi</p>
      </div>
      <div class="output-inform">
        <h1>Toplam: <span class="total-amount"></span></h1>
        <p>/ Kişi</p>
      </div>

      <button class="resetBtn">Sıfırla</button>
    </div>
  </div>
  )
}

export default App
