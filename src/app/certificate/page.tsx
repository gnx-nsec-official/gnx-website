"use client";

import React from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import axios from "axios";
import Input from "@/components/Input";
import Button from "@/components/Button";

const generateCertificate = async (
  pdfURL: string,
  position: [number, number],
  userName: string,
  fileName: string,
  fontURL?: string
) => {
  try {
    const response = await axios.get(pdfURL, {
      responseType: "arraybuffer",
    });
    const existingPdfBytes = response.data;

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
  } catch (e) {
    console.log(e);
  }

  //   const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  //   const page = pdfDoc.getPage(0); // First Page Only

  //   const { width, height } = page.getSize();

  //   page.drawText(userName, {
  //     x: 5,
  //     y: height / 2 + 300,
  //     size: 50,
  //     font: font,
  //     color: rgb(0, 0, 0),
  //   });

  //   const pdfBytes = await pdfDoc.save();
};

const Certificate = () => {
  const pdfURl = "https://www.africau.edu/images/default/sample.pdf";
  const handleClick = () => {
    generateCertificate(pdfURl, [0, 0], "arupbasak", "app.pdf");
  };
  return (
    <>
      <Input onChange={() => {}} />
      <Button onClick={handleClick}>Click Here</Button>
    </>
  );
};

export default Certificate;
