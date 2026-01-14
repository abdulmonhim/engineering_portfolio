export const projectData = [
    {
        id: "#TRB-092",
        title: "Geared TurboFan Engine",
        technology: "SolidWorks / Keyshot",
        description: "A geared turbofan (GTF) engine uses a reduction gearbox between the fan and the low-pressure spool to ensure optimal efficiency.",
        image: "/turbofan/TurboFanRender.jpg", // Main cover image
        category: "AEROSPACE COMPONENT",
        year: "2024",
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed",
        
        // Detailed Specs for the sidebar
        specs: [
            { label: "Software", value: "SolidWorks, Blender" },
            { label: "Polygons", value: "45,200 Tris" },
            { label: "Materials", value: "PBR Metallic" },
            { label: "Client", value: "Internal R&D" },
        ],
        
        // Math/Engineering Data for the Math Card section
       mathSpecs: {
    title: "Centrifugal Blade Stress",
    formula: "\\sigma_c = \\rho \\cdot \\omega^2 \\cdot \\int r \\, dr", 
    variables: [
        { name: "ρ (Density)", val: "4430 kg/m³" },
        { name: "ω (Angular Vel)", val: "1309 rad/s" },
        { name: "Result", val: "420 MPa" }
    ]
},

        // 🔑 CAROUSEL DATA: 3 distinct slides
        gallerySlides: [
            { 
                src: "/turbofan/TurboFanRender.jpg", 
                category: "Assembly View",
                title: "Primary Turbine Assembly", 
                description: "The complete assembly showing the high-bypass ratio configuration.",
                specs: [{ label: "Diameter", value: "2.4m" }, { label: "Blades", value: "18" }]
            },
            { 
                src: "/turbofan/TurboFanRender.jpg", // Ideally use a different image path if available
                category: "Internal Structure",
                title: "Reduction Gearbox", 
                description: "The planetary gear system allowing the fan to spin slower than the turbine.",
                specs: [{ label: "Ratio", value: "3:1" }, { label: "Type", value: "Planetary" }]
            },
            { 
                src: "/turbofan/TurboFanRender.jpg", 
                category: "Thermal Analysis",
                title: "Exhaust Cone", 
                description: "Ceramic matrix composite coating applied to withstand 1400°C exhaust temps.",
                specs: [{ label: "Temp", value: "1400°C" }, { label: "Material", value: "CMC" }]
            }
        ]
    },
    {
        id: "#MED-P005",
        title: "Excavator Arm",
        technology: "Fusion 360 / Blender",
        description: "High-strength excavator arm designed for durability and precision in harsh environments.",
        image: "/excavatorarm/excavator_render.png",
        category: "HEAVY MACHINERY",
        year: "2023",
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed",

        specs: [
            { label: "Software", value: "Fusion 360" },
            { label: "Material", value: "Steel 1020" },
            { label: "Load", value: "5 Tons" },
            { label: "Hydraulics", value: "3000 PSI" },
        ],

       mathSpecs: {
    title: "Hydraulic Cylinder Force",
    formula: "F_{ext} = P \\cdot \\left( \\frac{\\pi \\cdot D^2}{4} \\right)",
    variables: [
        { name: "P (Pressure)", val: "25 MPa" },
        { name: "D (Bore)", val: "120 mm" },
        { name: "Force", val: "282.7 kN" }
    ]
},

        gallerySlides: [
            { 
                src: "/excavatorarm/excavator_side_view.png", 
                category: "Side Profile",
                title: "Boom Geometry", 
                description: "Optimized linkage geometry to maximize reach while maintaining breakout force.",
                specs: [{ label: "Reach", value: "6.5m" }, { label: "Mass", value: "1200kg" }]
            },
            { 
                src: "/excavatorarm/excavator_exploded_view.png", 
                category: "Exploded View",
                title: "Pin Connections", 
                description: "Hardened steel pins with grease galleries for extended service intervals.",
                specs: [{ label: "Pin Dia", value: "80mm" }, { label: "Hardness", value: "60 HRC" }]
            },
            { 
                src: "/excavatorarm/excavator_render.png", 
                category: "End Effector",
                title: "Bucket Attachment", 
                description: "Quick-coupler mechanism allowing for rapid tool changes.",
                specs: [{ label: "Capacity", value: "0.8 m³" }, { label: "Teeth", value: "Forged" }]
            }
        ]
    },
    {
        id: "#AUT-C11",
        title: "V8 Engine Block",
        technology: "Rhino 3D / Grasshopper",
        description: "Topology optimization for weight reduction in high-performance automotive frames.",
        image: "/v8engine/engine_assembly.jpg",
        category: "AUTOMOTIVE STRUCTURE",
        year: "2023",
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed",

        specs: [
            { label: "Software", value: "SolidWorks" },
            { label: "Material", value: "Al 6061" },
            { label: "Displacement", value: "5.0L" },
            { label: "Config", value: "90° V8" },
        ],

       mathSpecs: {
    title: "Engine Displacement & Piston Speed",
    formula: "V_d = \\frac{\\pi}{4} \\cdot B^2 \\cdot S \\cdot N",
    variables: [
        { name: "B (Bore)", val: "101.6 mm" },
        { name: "S (Stroke)", val: "88.4 mm" },
        { name: "N (Cylinders)", val: "8" },
        { name: "Mean Piston Speed", val: "19.2 m/s @ 6.5k RPM" }
    ]
},

        gallerySlides: [
            { 
                src: "/v8engine/engine_block_render.png", 
                category: "Casting",
                title: "Cylinder Block", 
                description: "Open-deck design with cast-in iron liners for durability.",
                specs: [{ label: "Bore", value: "92mm" }, { label: "Deck", value: "Open" }]
            },
            { 
                src: "/v8engine/crank_pistons.png", 
                category: "Rotating Assy",
                title: "Crank & Pistons", 
                description: "Forged crankshaft with counterweights optimized for high RPM balance.",
                specs: [{ label: "Stroke", value: "88mm" }, { label: "Rod", value: "I-Beam" }]
            },
            { 
                src: "/v8engine/valvetrain.jpg", 
                category: "Valvetrain",
                title: "DOHC Head", 
                description: "Dual overhead cam arrangement with direct bucket tappets.",
                specs: [{ label: "Valves", value: "32" }, { label: "Lift", value: "11mm" }]
            }
        ]
    },
    {
        id: "#CIV-H40",
        title: "Valve Train Assembly",
        technology: "AutoCAD / Revit",
        description: "Comprehensive valve train assembly optimized for reduced friction and enhanced durability.",
        image: "/v8engine/valvetrain.jpg",
        category: "MECHANICAL SYSTEMS",
        year: "2024",
        sketchfabUrl: "https://sketchfab.com/models/d108862957e841269389f41786526e03/embed",

        specs: [
            { label: "Software", value: "NX, Abaqus" },
            { label: "Material", value: "Ti-6Al-4V" },
            { label: "Springs", value: "Beehive" },
            { label: "Rocker", value: "Roller" },
        ],

       mathSpecs: {
    title: "Rocker Arm Geometry & Valve Lift",
    formula: "L_{valve} = L_{lobe} \\cdot \\frac{d_2}{d_1}",
    variables: [
        { name: "Lobe Lift", val: "8.5 mm" },
        { name: "Rocker Ratio", val: "1.7:1" },
        { name: "Total Valve Lift", val: "14.45 mm" },
        { name: "Spring Seat Load", val: "135 lbs" }
    ]
},

        gallerySlides: [
            { 
                src: "/piston/cranks_pistons.png", 
                category: "Dynamics",
                title: "Cam Profile", 
                description: "Aggressive ramp angles for maximizing air intake duration.",
                specs: [{ label: "Duration", value: "272°" }, { label: "Lobe Sep", value: "112°" }]
            },
            { 
                src: "/piston/cranks_pistons.png", 
                category: "Stress Analysis",
                title: "Spring Compression", 
                description: "FEA analysis showing stress distribution at full lift.",
                specs: [{ label: "Max Stress", value: "850 MPa" }, { label: "FOS", value: "1.4" }]
            },
            { 
                src: "/piston/cranks_pistons.png", 
                category: "Materials",
                title: "Retainer Clip", 
                description: "Titanium retainers reducing valve train mass by 40%.",
                specs: [{ label: "Mass", value: "8g" }, { label: "Alloy", value: "Ti-64" }]
            }
        ]
    }
];