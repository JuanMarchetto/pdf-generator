import { useEffect } from "react";
import React from "react";
import { jsPDF } from "jspdf";
const sizes = {
  x: 2,
  y: 2.5
}

const origin = {
  x: 10,
  y: 10
}

const destination = {
  x: 132.2,
  y: 195.2
}

const destination2 = {
  x: 132.53,
  y: 196.3
  
}

const PageEnd = {
  x: 290,
  y: 210
}

const doc = new jsPDF({
  format: "a4",
  orientation: "landscape"
});

const drawline = ({x1, y1, x2, y2}) => {
  doc.line(x1, y1, x2, y2, "F")
}



const calculateLines = (origin, destination, sizes) => {
  const ratios = {
    x: (destination.x - origin.x) / sizes.x,
    y: (destination.y - origin.y) / sizes.y
  }
  for (let i= 0; i < ratios.x; i++){
    drawline({
      x1:origin.x + i * sizes.x,
      y1:origin.y,
      x2:origin.x + i * sizes.x,
      y2:destination.y,
    })
  }
  for (let j= 0; j < ratios.y; j++){
    drawline({
      x1:origin.x,
      y1:origin.y + j * sizes.y,
      x2:destination.x,
      y2:origin.y + j * sizes.y,
    })
  }

}

const generatePDF = () => {
  calculateLines(origin, destination, sizes);
  doc.addPage();
  calculateLines(origin, destination2, {x: sizes.y, y: sizes.x});
  doc.save("loli.pdf");
}

const Home = () => {


  useEffect(() => {

  }, []);
  return (
    <button
      type="button"
      className="text-3xl font-bold text-white px-8 py-4 bg-[#008800] rounded-3xl"
      onClick={()=>{generatePDF()}}
    >
      Descargar
    </button>
  )
}

export default Home
