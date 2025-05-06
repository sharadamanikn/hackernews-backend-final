import { Hono } from "hono";
import {} from "better-auth";
import { createMiddleware } from "hono/factory";
import betterAuthClient from "../../integrations/better-auth/index.js";
export const authRoute = new Hono();
authRoute.get("/user", async (context) => {
    const session = await betterAuthClient.api.getSession({ headers: context.req.raw.headers });
    if (!session) {
        return context.body(null, 401);
    }
    return context.json(session.user);
});
authRoute.on(["GET", "POST"], "*", (context) => {
    return betterAuthClient.handler(context.req.raw);
});
export const sessionMiddleware = createMiddleware(async (context, next) => {
    const session = await betterAuthClient.api.getSession({ headers: context.req.raw.headers });
    if (!session) {
        return context.body(null, 401);
    }
    context.set("user", session.user);
    context.set("session", session.session);
    return await next();
});
