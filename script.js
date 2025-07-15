// Definición completa de semestres y materias
const semestres = [
  { nombre: "Primer Semestre", materias: [
      { id: "calculo_dif", nombre: "Cálculo Diferencial", desbloquea:["calculo_int","fisica"] },
      { id: "botanica", nombre: "Botánica general y taxonómica" },
      { id: "quimica_gen", nombre: "Química General", desbloquea:["quimica_inorg","quimica_org1","fisicoquimica"] },
      { id: "biologia_gen", nombre: "Biología General", desbloquea:["biologia_mol"] },
      { id: "historia", nombre: "Historia de la Farmacia", desbloquea:["legislacion"] },
      { id: "comunicacion", nombre: "Comunicación", desbloquea:["metodologia"] },
    ]
  },
  { nombre: "Segundo Semestre", materias: [
      { id: "calculo_int", nombre: "Cálculo Integral", requiere:["calculo_dif"], desbloquea:["fisicoquimica","bioestadistica"] },
      { id: "fisica", nombre: "Física", requiere:["calculo_dif"] },
      { id: "quimica_inorg", nombre: "Química Inorgánica", requiere:["quimica_gen"], desbloquea:["quimica_analitica"] },
      { id: "quimica_org1", nombre: "Química Orgánica I", requiere:["quimica_gen"], desbloquea:["quimica_org2","bioquimica"] },
      { id: "biologia_mol", nombre: "Biología Molecular", requiere:["biologia_gen"], desbloquea:["microbiologia"] },
      { id: "desarrollo", nombre: "Desarrollo Humano", desbloquea:["etica"] },
    ]
  },
  { nombre: "Tercer Semestre", materias: [
      { id: "fisicoquimica", nombre: "Fisicoquímica", requiere:["quimica_gen","calculo_int"], desbloquea:["operaciones"] },
      { id: "quimica_analitica", nombre: "Química Analítica", requiere:["quimica_inorg"], desbloquea:["instrumental"] },
      { id: "quimica_org2", nombre: "Química Orgánica II", requiere:["quimica_org1"], desbloquea:["quimica_farma"] },
      { id: "bioquimica", nombre: "Bioquímica", requiere:["quimica_org1"], desbloquea:["inmunologia","morfofisiologia"] },
      { id: "microbiologia", nombre: "Microbiología y Parasitología", requiere:["biologia_mol"] },
      { id: "etica", nombre: "Ética Farmacéutica y Bioética", requiere:["desarrollo"] },
    ]
  },
  { nombre: "Cuarto Semestre", materias: [
      { id: "operaciones", nombre: "Operaciones Unitarias", requiere:["fisicoquimica"], desbloquea:["tec_solidos"] },
      { id: "instrumental", nombre: "Análisis Instrumental", requiere:["quimica_analitica"], desbloquea:["farmacognosia","nutricion","control"] },
      { id: "quimica_farma", nombre: "Química Farmacéutica", requiere:["quimica_org2"], desbloquea:["biofarmacia"] },
      { id: "inmunologia", nombre: "Inmunología", requiere:["bioquimica"], desbloquea:["biotecnologia"] },
      { id: "morfofisiologia", nombre: "Morfofisiología", requiere:["bioquimica"], desbloquea:["farmacologia1","fisiopato"] },
      { id: "educacion_salud", nombre: "Educación en Salud" },
      { id: "electiva1", nombre: "Electiva de Contexto I", desbloquea:["electiva2"] },
    ]
  },
  { nombre: "Quinto Semestre", materias: [
      { id: "tec_solidos", nombre: "Tec. Medicamentos Sólidos", requiere:["operaciones"], desbloquea:["tec_liquidos"] },
      { id: "farmacognosia", nombre: "Farmacognosia y Fitoquímica", requiere:["instrumental"] },
      { id: "biofarmacia", nombre: "Biofarmacia y Farmacocinética", requiere:["quimica_farma"] },
      { id: "farmacologia1", nombre: "Farmacología I", requiere:["morfofisiologia"], desbloquea:["farmacologia2","toxicologia"] },
      { id: "fisiopato", nombre: "Fisiopatología", requiere:["morfofisiologia"] },
      { id: "metodologia", nombre: "Metodología de la Investigación", requiere:["comunicacion"], desbloquea:["diseno_proyecto"] },
      { id: "electiva2", nombre: "Electiva de Contexto II", requiere:["electiva1"], desbloquea:["electiva3"] },
    ]
  },
  { nombre: "Sexto Semestre", materias: [
      { id: "tec_liquidos", nombre: "Tec. Medicamentos Líquidos", requiere:["tec_solidos"], desbloquea:["tec_semisolidos"] },
      { id: "bioestadistica", nombre: "Bioestadística", requiere:["calculo_int"], desbloquea:["control"] },
      { id: "biotecnologia", nombre: "Biotecnología", requiere:["inmunologia"] },
      { id: "farmacologia2", nombre: "Pharmacología II", requiere:["farmacologia1"], desbloquea:["clinica","farmacoter"] },
      { id: "toxicologia", nombre: "Toxicología", requiere:["farmacologia1"], desbloquea:["ocupacional"] },
      { id: "diseno_proyecto", nombre: "Diseño y Proyecto de Investigación", requiere:["metodologia"], desbloquea:["trabajo_grado"] },
      { id: "electiva3", nombre: "Electiva de Profundización III", requiere:["electiva2"], desbloquea:["electiva4"] },
    ]
  },
  { nombre: "Séptimo Semestre", materias: [
      { id: "tec_semisolidos", nombre: "Tec. Semisólidos y Magistrales", requiere:["tec_liquidos"], desbloquea:["cosmeticos"] },
      { id: "nutricion", nombre: "Nutrición y Bromatología", requiere:["instrumental"], desbloquea:["alimentos"] },
      { id: "clinica", nombre: "Farmacia Clínica", requiere:["farmacologia2"], desbloquea:["hospitalaria"] },
      { id: "farmacoter", nombre: "Farmacoterapéutica", requiere:["farmacologia2"] },
      { id: "ocupacional", nombre: "Salud Ocupacional", requiere:["toxicologia"], desbloquea:["salud_publica"] },
      { id: "legislacion", nombre: "Legislación Farmacéutica", requiere:["historia"], desbloquea:["gestion_calidad","gestion_industrial","gestion_servicios"] },
      { id: "electiva4", nombre: "Electiva Profundización IV", requiere:["electiva3"], desbloquea:["electiva5"] },
    ]
  },
  { nombre: "Octavo Semestre", materias: [
      { id: "cosmeticos", nombre: "Tecnología de Cosméticos", requiere:["tec_semisolidos"], desbloquea:["formulacion","productos_naturales"] },
      { id: "alimentos", nombre: "Tecnología de Alimentos", requiere:["nutricion"] },
      { id: "control", nombre: "Análisis y Control de Medicamentos", requiere:["bioestadistica","instrumental"], desbloquea:["gestion_calidad"] },
      { id: "hospitalaria", nombre: "Farmacia Hospitalaria y Comunitaria", requiere:["clinica"], desbloquea:["gestion_servicios"] },
      { id: "salud_publica", nombre: "Salud Pública", requiere:["ocupacional"] },
      { id: "electiva5", nombre: "Electiva Profundización V", requiere:["electiva4"], desbloquea:["electiva6"] },
    ]
  },
  { nombre: "Noveno Semestre", materias: [
      { id: "formulacion", nombre: "Diseño y Formulación de Medicamentos", requiere:["cosmeticos"] },
      { id: "productos_naturales", nombre: "Tec. Productos Naturales y Homeopáticos", requiere:["cosmeticos"] },
      { id: "gestion_calidad", nombre: "Sistema de Gestión de Calidad", requiere:["legislacion","control"] },
      { id: "gestion_industrial", nombre: "Gestión Farmacéutica Industrial", requiere:["legislacion"] },
      { id: "gestion_servicios", nombre: "Gestión Servicios Farmacéuticos", requiere:["legislacion","hospitalaria"] },
      { id: "electiva6", nombre: "Electiva Profundización VI", requiere:["electiva5"], desbloquea:["electiva7","electiva8","electiva9"] },
    ]
  },
  { nombre: "Décimo Semestre", materias: [
      { id: "practicas", nombre: "Prácticas Académicas" },
      { id: "trabajo_grado", nombre: "Trabajo de Grado", requiere:["diseno_proyecto"] },
      { id: "electiva7", nombre: "Electiva Profundización VII", requiere:["electiva6"] },
      { id: "electiva8", nombre: "Electiva Profundización VIII", requiere:["electiva6"] },
      { id: "electiva9", nombre: "Electiva Profundización IX", requiere:["electiva6"] },
    ]
  }
];

const mallaDiv = document.getElementById("malla");
const estadoMaterias = {};

semestres.forEach(sem => {
  const semDiv = document.createElement("div");
  semDiv.classList.add("semestre");

  const title = document.createElement("h2");
  title.textContent = sem.nombre;
  semDiv.appendChild(title);

  const materiasDiv = document.createElement("div");
  materiasDiv.classList.add("materias");

  sem.materias.forEach(mat => {
    const btn = document.createElement("div");
    btn.classList.add("materia");
    btn.textContent = mat.nombre;
    btn.dataset.id = mat.id;

    estadoMaterias[mat.id] = {
      aprobada: false,
      requiere: mat.requiere || [],
      desbloquea: mat.desbloquea || [],
      element: btn,
    };

    if (mat.requiere?.length) {
      btn.classList.add("bloqueada");
    }

    btn.addEventListener("click", () => {
      if (btn.classList.contains("bloqueada")) return;

      btn.classList.toggle("aprobada");
      estadoMaterias[mat.id].aprobada = !estadoMaterias[mat.id].aprobada;

      estadoMaterias[mat.id].desbloquea.forEach(id => {
        const reqs = estadoMaterias[id].requiere;
        const aprob = reqs.every(r => estadoMaterias[r]?.aprobada);
        const el = estadoMaterias[id].element;
        if (aprob) {
          el.classList.remove("bloqueada");
        } else {
          el.classList.add("bloqueada");
          el.classList.remove("aprobada");
          estadoMaterias[id].aprobada = false;
        }
      });
    });

    materiasDiv.appendChild(btn);
  });

  semDiv.appendChild(materiasDiv);
  mallaDiv.appendChild(semDiv);
});
