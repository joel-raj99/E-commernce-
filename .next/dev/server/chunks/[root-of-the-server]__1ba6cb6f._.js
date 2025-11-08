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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
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
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
(()=>{
    const e = new Error("Cannot find module '@/lib/mongodb'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/models/Product'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const runtime = "nodejs"; // 🔥 required for file system access
async function POST(req) {
    try {
        await connectDB();
        const formData = await req.formData();
        // Extract all fields
        const name = formData.get("name");
        const price = Number(formData.get("price"));
        const description = formData.get("description");
        const category = formData.get("category");
        const quantity = Number(formData.get("quantity"));
        const power = formData.get("power");
        const usage = formData.get("usage");
        const numberOfSpeeds = Number(formData.get("numberOfSpeeds"));
        const isiCertified = formData.get("isiCertified") === "true";
        const warranty = formData.get("warranty");
        const uses = formData.get("uses");
        const bodyMaterial = formData.get("bodyMaterial");
        const numberOfBlades = Number(formData.get("numberOfBlades"));
        const countryOfOrigin = formData.get("countryOfOrigin");
        const voltage = formData.get("voltage");
        const frequency = formData.get("frequency");
        const brandName = formData.get("brandName");
        const modelName = formData.get("modelName");
        const material = formData.get("material");
        // Handle multiple file uploads
        const files = formData.getAll("images");
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public/uploads");
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(uploadDir, {
                recursive: true
            });
        }
        const imagePaths = [];
        for (const file of files){
            const buffer = Buffer.from(await file.arrayBuffer());
            const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, filename);
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, buffer);
            imagePaths.push(`/uploads/${filename}`);
        }
        const newProduct = await Product.create({
            name,
            price,
            description,
            images: imagePaths,
            category,
            quantity,
            power,
            usage,
            numberOfSpeeds,
            isiCertified,
            warranty,
            uses,
            bodyMaterial,
            numberOfBlades,
            countryOfOrigin,
            voltage,
            frequency,
            brandName,
            modelName,
            material
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
        await connectDB();
        const products = await Product.find({});
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ba6cb6f._.js.map