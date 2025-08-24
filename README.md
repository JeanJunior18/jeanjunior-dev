
---

````markdown
# 📘 Documentação Interna - Site de Afiliados

Arquivo de referência para edição de produtos, categorias e cursos no `products.json`.  

## 📋 Estrutura do JSON

```json
{
  "tools": [ ... ],        // Produtos e ferramentas
  "courses": [ ... ],      // Cursos recomendados
  "categories": [ ... ]    // Categorias para filtros
}
````

---

## 🛠️ Products / Tools

Exemplo de estrutura de cada produto:

```json
{
  "id": "string",           
  "name": "string",         
  "categoria": "string",    
  "badge": "string",        
  "description": "string",  
  "price": "string",        
  "link": "string",         
  "textLink": "string"      
}
```

### Exemplo:

```json
{
  "tools": [
    {
      "id": "teclado-mecanico-gamer",
      "name": "Teclado Mecânico RGB",
      "categoria": "hardware",
      "badge": "Amazon",
      "description": "Teclado mecânico com switches azuis e iluminação RGB.",
      "price": "R$ 299,90",
      "link": "https://amzn.to/seu-link-afiliado",
      "textLink": "Comprar na Amazon"
    }
  ]
}
```

---

## 📚 Courses

Exemplo de curso:

```json
{
  "courses": [
    {
      "id": "react-completo",
      "name": "React - Do Zero ao Avançado",
      "badge": "Bestseller",
      "description": "Curso completo de React com hooks, redux e deploy.",
      "price": "R$ 149,90",
      "link": "https://udemy.com/seu-link-afiliado",
      "textLink": "Inscrever-se"
    }
  ]
}
```

---

## 🏷️ Categories

Exemplo de categorias:

```json
{
  "categories": [
    { "id": "all", "name": "Todas" },
    { "id": "ide", "name": "IDEs" },
    { "id": "hardware", "name": "Hardware" },
    { "id": "saas", "name": "SaaS" }
  ]
}
```

---

## ⚡ Dicas Rápidas

* IDs devem ser **únicos**
* Categoria de cada produto deve existir em `categories`
* Badge pode ser `"Amazon"`, `"Grátis"`, `"Premium"`, `"Bestseller"`, etc.
* Preços: `"R$ 149,90"` ou `"Gratuito"`
* Sempre testar links

```

---

Se você quiser, posso te gerar **um arquivo `.md` pronto para download** que você só clica e baixa. Quer que eu faça isso?
```
