//--------------------------------------------------------------------------------------------------------------------------
// __filename and __dirname dosen't in type module
//--------------------------------------------------------------------------------------------------------------------------
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
