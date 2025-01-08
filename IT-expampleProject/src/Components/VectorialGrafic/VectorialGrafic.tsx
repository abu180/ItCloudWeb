import './VectorialGrafic.css';
import { motion } from 'framer-motion';

function VectorialGrafic() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="400"
        height="400"
      >
        <circle cx="250" cy="250" r="200" fill="#f5f5f5" />
        
        //Cabeza
        <circle cx="250" cy="180" r="40" fill="#ffffff" />

        //Cuerpo
        <rect x="215" y="250" width="70" height="60" rx="40" ry="50" fill="#fff" />
        //Cuello
        <rect x="230" y="250" width="40" height="10" rx="22" fill="#e0e0e0" />

        <rect x="235" y="170" width="30" height="15" rx="5" fill="#000000" />
        <circle cx="240" cy="175" r="3" fill="#ffffff" />
        <circle cx="260" cy="175" r="3" fill="#ffffff" />
    
        <path
          d="M270 260h60c10 0 15-7 15-15s-5-15-15-15c-3-15-12-20-20-20s-17 5-20 20c-10 0-15 7-15 15s5 15 15 15z"
          fill="#9b8efc"
        />
    
        <circle cx="330" cy="180" r="30" fill="#e0e0e0" />
        <circle cx="330" cy="180" r="20" fill="#ffffff" />
        <rect
          x="328"
          y="160"
          width="4"
          height="20"
          fill="#e0e0e0"
          transform="rotate(45 330 180)"
        />
    
        <path
          d="M150 250c20-50 60-80 80-100-10 40-30 70-50 100z"
          fill="#fcafef"
        />
      </svg>
    );
}

export default VectorialGrafic;