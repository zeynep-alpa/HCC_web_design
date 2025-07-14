import React from "react";
import "./TahminSonuc.css";
import { useLocation } from "react-router-dom";

const TahminSonuc = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hasta = queryParams.get("hasta") || "Bilinmiyor";
  const risk = queryParams.get("risk") || "%87 - Yüksek Risk";

  const llmYanit = `
    Model, AFP ve GGT seviyelerinin normalin üstünde olması ve yaş/gender gibi klinik verileri göz önüne alarak HCC riskini yüksek olarak değerlendirmiştir.
    Doktorun onayı ve ileri görüntüleme yöntemleriyle doğrulama önerilir.
  `;

  return (
    <div className="tahmin-sonuc-container">
      <h2>HCC Risk Tahmini</h2>

      <div className="hasta-bilgisi">
        <p><strong>Hasta Adı Soyadı:</strong> {hasta}</p>
        <p><strong>HCC Risk Seviyesi:</strong> {risk}</p>
      </div>

      <div className="llm-aciklama">
        <h3>Yapay Zekâ Modelinin Değerlendirmesi</h3>
        <p>{llmYanit}</p>
      </div>
    </div>
  );
};

export default TahminSonuc;
