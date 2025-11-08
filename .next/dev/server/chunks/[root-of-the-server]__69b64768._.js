module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/src/app/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const connectDB = async ()=>{
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connections[0].readyState) return;
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/src/app/models/ProductModel.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import mongoose from "mongoose";
// const ProductSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       default: 0,
//       required: true,
//       min: 0,
//     },
//     // 🔧 Additional fields from your data
//     power: {
//       type: String, // e.g., "750W"
//       required: true,
//     },
//     usage: {
//       type: String, // e.g., "Wet & Dry Grinding"
//       required: true,
//     },
//     numberOfSpeeds: {
//       type: Number, // e.g., 3
//       required: true,
//     },
//     isiCertified: {
//       type: Boolean, // e.g., Yes → true, No → false
//       default: false,
//     },
//     warranty: {
//       type: String, // e.g., "1 year"
//       required: true,
//     },
//     uses: {
//       type: String, // e.g., "Domestic"
//       required: true,
//     },
//     bodyMaterial: {
//       type: String, // e.g., "Plastic"
//       required: true,
//     },
//     numberOfBlades: {
//       type: Number, // e.g., 3
//       required: true,
//     },
//     countryOfOrigin: {
//       type: String, // e.g., "Made in India"
//       required: true,
//     },
//     voltage: {
//       type: String, // e.g., "240V"
//       required: true,
//     },
//     frequency: {
//       type: String, // e.g., "50Hz"
//       required: true,
//     },
//     brandName: {
//       type: String, // e.g., "Mercy"
//       required: true,
//     },
//     modelName: {
//       type: String, // e.g., "Bonus"
//       required: true,
//     },
//     material: {
//       type: String, // e.g., "ABS Plastic & Stainless Steel"
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// const Product =
//   mongoose.models.Product || mongoose.model("Product", ProductSchema);
// export default Product;
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const ProductSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        required: true,
        min: 0
    },
    // Extra details
    power: {
        type: String,
        required: true
    },
    usage: {
        type: String,
        required: true
    },
    numberOfSpeeds: {
        type: Number,
        required: true
    },
    isiCertified: {
        type: Boolean,
        default: false
    },
    warranty: {
        type: String,
        required: true
    },
    uses: {
        type: String,
        required: true
    },
    bodyMaterial: {
        type: String,
        required: true
    },
    numberOfBlades: {
        type: Number,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: true
    },
    voltage: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Product = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Product || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Product", ProductSchema);
const __TURBOPACK__default__export__ = Product;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/app/lib/multer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upload",
    ()=>upload
]);
(()=>{
    const e = new Error("Cannot find module 'multer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
;
const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public/uploads");
// Create folder if it doesn't exist
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(uploadDir, {
        recursive: true
    });
}
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, uploadDir);
    },
    filename: (req, file, cb)=>{
        const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
        cb(null, uniqueName);
    }
});
const upload = multer({
    storage
});
}),
"[project]/src/app/api/product/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use server";
// import { NextResponse } from "next/server";
// import  connectDB  from "@/app/lib/db";
// import Product from "@/app/models/ProductModel";
// // 🟢 CREATE Product
// export async function POST(req) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const newProduct = await Product.create(body);
//     return NextResponse.json(
//       { message: "Product created successfully", product: newProduct },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error creating product", error: error.message },
//       { status: 500 }
//     );
//   }
// }
// // 🔵 GET All Products
// export async function GET() {
//   try {
//     await connectDB();
//     const products = await Product.find({});
//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error fetching products", error: error.message },
//       { status: 500 }
//     );
//   }
// }
/* __next_internal_action_entry_do_not_use__ [{"004332e6e189345dc234bf99b60b98c5204afacb88":"GET","4023eb7105a2c547c455eae8dba884d8dbfa1ca7c0":"POST","7f9db4afed4e46f59cd0775dd7674e806466b86d65":"config"},"",""] */ __turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "config",
    ()=>config
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$ProductModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/models/ProductModel.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$multer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/multer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
// Turn multer into a promise-based middleware
const uploadMiddleware = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$multer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upload"].array("images", 5) // up to 5 images
);
const config = {
    api: {
        bodyParser: false
    }
};
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const formData = await new Promise((resolve, reject)=>{
            uploadMiddleware(req, {}, async (err)=>{
                if (err) reject(err);
                else resolve(req);
            });
        });
        const body = Object.fromEntries(formData.body ? Object.entries(formData.body) : []);
        // Convert uploaded file paths to array
        const imagePaths = formData.files.map((file)=>`/uploads/${file.filename}`);
        const newProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$ProductModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            ...body,
            images: imagePaths
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Product created successfully",
            product: newProduct
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Error creating product",
            error: error.message
        }, {
            status: 500
        });
    }
}
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$ProductModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(products, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Error fetching products",
            error: error.message
        }, {
            status: 500
        });
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    config,
    POST,
    GET
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(config, "7f9db4afed4e46f59cd0775dd7674e806466b86d65", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(POST, "4023eb7105a2c547c455eae8dba884d8dbfa1ca7c0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(GET, "004332e6e189345dc234bf99b60b98c5204afacb88", null);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69b64768._.js.map