import {Router} from "express"
import LivroController from "../Controllers/livroController.js"

const livroRouter = Router()

const livroCtrl = new LivroController()

livroRouter.get("/", livroCtrl.consultar)
.get("/:cod", livroCtrl.consultar)
.post("/", livroCtrl.gravar)
.put("/:cod", livroCtrl.alterar)
.delete("/:cod", livroCtrl.excluir)

export default livroRouter