import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <div className="logo-wrap">
          <Image
            src="/logo.svg"
            alt=""
            width={192}
            height={192}
            priority
            className="logo"
          />
        </div>
        <h1 className="mark">?? ?? ?? ??</h1>
        <p className="subtitle">? ? ? ? ? ? ?</p>
        <div className="cta-row">
          <a className="cta primary" href="#">
            ?
          </a>
          <a className="cta" href="#">
            ??
          </a>
        </div>
      </div>
      <div className="features">
        <div className="card">
          <div className="card-icon">??</div>
          <div className="card-body">? ? ? ?</div>
        </div>
        <div className="card">
          <div className="card-icon">??</div>
          <div className="card-body">? ? ? ?</div>
        </div>
        <div className="card">
          <div className="card-icon">??</div>
          <div className="card-body">? ? ? ?</div>
        </div>
      </div>
      <footer className="footer">? ? ?</footer>
    </main>
  );
}

