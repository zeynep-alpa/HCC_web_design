// src/components/InputPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InputPage.css";

const InputPage = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    alcohol: "",
    smoking: "",
    afp: "",
    alt: "",
    ast: "",
    alp: "",
    ggt: "",
    bilirubin: "",
    albumin: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleCalculate = () => {
    navigate("/sonuc");
  };

  return (
    <div className="input-page">
      <h2>Hasta Bilgileri ve Laboratuvar Verileri</h2>

      <div className="flex-row">
        {/* SOL */}
        <div className="left-section">
          <h3>Hasta Bilgileri</h3>
          <div className="form-group">
            <label>Hasta Adı Soyadı</label>
            <input
              type="text"
              name="name"
              placeholder="Örn., Ayşe Yılmaz"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Hasta Yaşı</label>
            <input
              type="number"
              name="age"
              placeholder="Örn., 45"
              value={form.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Cinsiyet</label>
            <input
              type="text"
              name="gender"
              placeholder="Örn., Kadın"
              value={form.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Alkol Tüketimi</label>
            <input
              type="text"
              name="alcohol"
              placeholder="Evet/Hayır"
              value={form.alcohol}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Sigara Kullanımı</label>
            <input
              type="text"
              name="smoking"
              placeholder="Evet/Hayır"
              value={form.smoking}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* BT YÜKLEME ve LAB SONUÇLARI - YAN YANA */}
      <div
        className="bt-lab-container"
        style={{ display: "flex", gap: "40px", marginTop: "40px" }}
      >
        {/* BT YÜKLEME ALANI */}
        <div className="bt-section" style={{ flex: 1 }}>
          <h3>Bilgisayarlı Tomografi (BT) Yükleme</h3>
          <label
            htmlFor="file-upload"
            className="upload-area"
            style={{ cursor: "pointer" }}
          >
            {image ? (
              <img
                src={image}
                alt="BT Görüntüsü"
                style={{ maxWidth: "100%", borderRadius: "12px" }}
              />
            ) : (
              <div>
                <strong>BT Görüntüsü Yükle</strong>
                <small>Görüntüyü buraya sürükleyip bırakın veya gözatın</small>
              </div>
            )}
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        {/* LABORATUVAR SONUÇLARI */}
        <div className="right-section" style={{ flex: 1 }}>
          <h3>Laboratuvar Sonuçları</h3>
          <div className="lab-grid">
            {[
              ["AFP", "afp", "5.2"],
              ["ALT", "alt", "25"],
              ["AST", "ast", "30"],
              ["ALP", "alp", "120"],
              ["GGT", "ggt", "40"],
              ["Bilirubin", "bilirubin", "0.8"],
              ["Albumin", "albumin", "4.2"],
            ].map(([label, name, placeholder]) => (
              <div className="lab-item" key={name}>
                <label>{label}</label>
                <input
                  type="text"
                  name={name}
                  placeholder={`Örn., ${placeholder}`}
                  value={form[name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="button-container" style={{ marginTop: "30px" }}>
        <button className="calculate-btn" onClick={handleCalculate}>
          Hesapla
        </button>
      </div>
    </div>
  );
};

export default InputPage;
