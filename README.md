# Observatorio Bibliotecas Ecuador

Bienvenido al repositorio del **Observatorio Bibliotecas Ecuador**, un sitio web de documentación y análisis de bibliotecas en Ecuador, publicado con [MkDocs](https://www.mkdocs.org/) y el tema Material.

## 🌐 Sitio publicado

Puedes visitar la versión en línea del sitio en:

[https://observatoriobiblioecu.github.io/](https://observatoriobiblioecu.github.io/)

---

## 📂 Estructura del proyecto

```
observatorio-bibliotecas-ecuador/
├─ docs/                # Archivos de contenido en Markdown
├─ site/                # Carpeta generada automáticamente por MkDocs (no versionar)
├─ mkdocs.yml           # Configuración del sitio
├─ venv/                # Entorno virtual (no versionar)
└─ .gitignore           # Ignora site/ y venv/
```

* **docs/** → Contenido visible en la web.
* **site/** → Generado por `mkdocs build` o `mkdocs gh-deploy`.
* **mkdocs.yml** → Configuración del sitio (tema, navegación, etc.).
* **venv/** → Entorno virtual Python con MkDocs y dependencias.

---

## ⚡ Flujo de trabajo para actualizar el sitio

1. **Activar entorno virtual**:

```bash
source venv/bin/activate
```

2. **Editar o agregar contenido** dentro de `docs/`.

3. **Probar localmente** antes de publicar:

```bash
mkdocs serve
```

* Accede en tu navegador: `http://127.0.0.1:8000/`

4. **Construir la versión final** para producción:

```bash
mkdocs build
```

5. **Publicar en GitHub Pages**:

```bash
mkdocs gh-deploy --force
```

* Esto actualiza automáticamente la rama `gh-pages` y tu sitio en línea.

6. **Opcional**: Si prefieres trabajar manualmente con `site/`:

```bash
rsync -av --delete site/ ./
git add --all
git commit -m "Actualización: <describe tus cambios>"
git push origin main
```

---

## 🤝 Cómo contribuir

1. Clona el repositorio:

```bash
git clone https://github.com/observatoriobiblioecu/observatoriobibliotecas-ecuador.git
cd observatorio-bibliotecas-ecuador
```

2. Activa el entorno virtual:

```bash
source venv/bin/activate
```

3. Agrega o edita archivos en `docs/`.

4. Prueba localmente con `mkdocs serve` antes de publicar.

5. Publica los cambios siguiendo el flujo anterior.

---

## 📌 Notas

* No versionar las carpetas `site/` ni `venv/`.
* Los cambios en `docs/` se reflejan automáticamente en la web tras `mkdocs gh-deploy`.
* Mantén siempre actualizado el entorno virtual con:

```bash
pip install -r requirements.txt
```

