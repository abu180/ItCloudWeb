import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Datos del organigrama
const data = {
  id: "CEO",
  name: "Director General",
  children: [
    {
      id: "manager1",
      name: "Gerente de Marketing",
      children: [
        { id: "employee1", name: "Empleado 1", children: [] },
        { id: "employee2", name: "Empleado 2", children: [] },
      ],
    },
    {
      id: "manager2",
      name: "Gerente de Tecnología",
      children: [
        { id: "employee3", name: "Empleado 3", children: [] },
        { id: "employee4", name: "Empleado 4", children: [] },
      ],
    },
  ],
};

// Componente para un nodo del organigrama
const OrgChartNode = ({ node, depth = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      style={{
        marginLeft: depth * 20,
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: expanded ? "#f0f8ff" : "#fff",
        cursor: "pointer",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setExpanded(!expanded)}
    >
      <h4>{node.name}</h4>
      <AnimatePresence>
        {expanded && node.children && node.children.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden", marginTop: "10px" }}
          >
            {node.children.map((childNode) => (
              <OrgChartNode key={childNode.id} node={childNode} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Componente principal del organigrama
const OrgChart = () => {
  return (
    <div style={{ padding: "20px" }}>
      <OrgChartNode node={data} />
    </div>
  );
};

export default OrgChart;
