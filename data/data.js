const projectData = [
    {
        title: "Geared TurboFan Engine", // Title from original projects array
        technology: "SolidWorks / Keyshot",
        description: "A geared turbofan (GTF) engine uses a reduction gearbox between the fan and the low-pressure spool...",
        // 🔑 FIXED IMAGE: Use the unique image path for the turbofan
        image: "/turbofan/TurboFanRender.jpg", 
        category: "AEROSPACE COMPONENT",
        year: "2024",
        id: "#TRB-092",
        specs: [
            { label: "Software", value: "SolidWorks, Blender" },
            { label: "Polygons", value: "45,200 Tris" },
            { label: "Materials", value: "PBR Metallic/Roughness" },
            { label: "Client", value: "Internal R&D" },
        ],
        challenge: "The goal was to optimize the geometry of a standard high-pressure turbine blade to withstand higher thermal stress while reducing overall mass by 15%.",
        solution: "Using topology optimization in Fusion 360, we generated an internal lattice structure that maintains structural integrity but significantly drops weight. The final model was re-meshed in Blender for visualization.",
        detailImages: [
            { src: "/turbofan/TurboFanRender.jpg", caption: "FIG 1.0 // WIREFRAME ANALYSIS", alt: "Wireframe View" },
            { src: "/turbofan/TurboFanRender.jpg", alt: "Detail Shot 1" },
            { src: "/turbofan/TurboFanRender.jpg", alt: "Detail Shot 2" },
        ],
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed"
    },
    {
        title: "Excavator Arm", // Title from original projects array
        technology: "Fusion 360 / Blender",
        description: "High-strength excavator arm designed for durability and precision in harsh environments.",
        // 🔑 FIXED IMAGE: Use the unique image path for the excavator arm
        image: "/excavatorarm/excavator_render.png", 
        category: "HEAVY MACHINERY", // Updated category
        year: "2023",
        id: "#MED-P005",
        specs: [
            { label: "Software", value: "Fusion 360, Keyshot" },
            { label: "Material", value: "Titanium Alloy (Grade 5)" },
            { label: "Weight Reduction", value: "30%" },
            { label: "Client", value: "BioTech Solutions" },
        ],
        challenge: "Design a lightweight, durable, and highly articulated prosthetic hand for lower-budget fabrication.",
        solution: "Utilized Fused Deposition Modeling (FDM) principles for modular components and generative design to reduce weight in non-critical load areas.",
        detailImages: [
            { src: "/excavatorarm/excavator_exploded_view.png", caption: "FIG 2.1 | ASSEMBLY RENDER", alt: "Assembly Render" },
            { src: "/excavatorarm/excavator_side_view.png", caption: "FIG 2.2 | DETAIL SHOT 1", alt: "Detail Shot 1" },
            { src: "/excavatorarm/excavator_render.png", caption: "FIG 2.3 | DETAIL SHOT 2", alt: "Detail Shot 2" },
        ],
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed"
    },
    {
        title: "V8 Engine Block", // Title from original projects array
        technology: "Rhino 3D / Grasshopper",
        description: "Topology optimization for weight reduction in EV frames.",
        // 🔑 FIXED IMAGE: Use the unique image path for the V8 engine
        image: "/v8engine/engine_block_render.png", 
        category: "AUTOMOTIVE STRUCTURE",
        year: "2023",
        id: "#AUT-C11",
        // 🔑 ADDED SPECS: Added specs to ensure data is displayed
        specs: [
            { label: "Software", value: "AutoCAD, Inventor" },
            { label: "Material", value: "4140 Steel" },
            { label: "Pressure", value: "4500 PSI" },
            { label: "Client", value: "Auto-Tech" },
        ], 
        challenge: "Design a high-performance V8 engine block...", solution: "Reinforced cylinder walls to withstand high combustion pressures.", 
        detailImages: [
             { src: "/v8engine/engine_block_ohv.jpg", caption: "FIG 3.1 | EXPLODED VIEW", alt: "Exploded View" },
             { src: "/v8engine/engine_blocks.png", caption: "FIG 3.1 | EXPLODED VIEW", alt: "Exploded View" },
             { src: "/v8engine/pistons.jpg", caption: "FIG 3.1 | EXPLODED VIEW", alt: "Exploded View" },
        ] ,
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed"
    },
    {
        title: "Valve Train Assembly", // Title from original projects array
        technology: "AutoCAD / Revit",
        description: "Comprehensive valve train assembly optimized for reduced friction and enhanced durability.",
        // 🔑 FIXED IMAGE: Use the unique image path for the piston/rod
        image: "/piston/cranks_pistons.png", 
        category: "MECHANICAL SYSTEMS", // Updated category
        year: "2024",
        id: "#CIV-H40",
        // 🔑 ADDED SPECS: Added specs to ensure data is displayed
        specs: [
            { label: "Software", value: "Siemens NX, Abaqus" },
            { label: "Material", value: "Titanium Grade 5" },
            { label: "Torque", value: "45 Nm" },
            { label: "Client", value: "MechSys Solutions" },
        ], 
        challenge: "Minimize friction and ensure long-term durability in a high-revving engine.", 
        solution: "Used advanced lubrication analysis and material selection (Titanium Grade 5).", 
        detailImages: [
            { src: "/piston/cranks_pistons.png", caption: "FIG 4.1 | MATERIAL STUDY", alt: "Material Study" },
            { src: "/piston/cranks_pistons.png", caption: "FIG 4.1 | MATERIAL STUDY", alt: "Material Study" },
            { src: "/piston/cranks_pistons.png", caption: "FIG 4.1 | MATERIAL STUDY", alt: "Material Study" },
        ],
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed"
    },
];

// Export only the necessary array
export { projectData };