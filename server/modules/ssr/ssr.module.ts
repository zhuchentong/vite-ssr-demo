import { Module, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import * as express from 'express';
import { createSsrServer } from 'vite-ssr/dev';

@Module({})
export class SSRModule implements OnModuleInit {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  async onModuleInit() {
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    // Express Instance
    const app = httpAdapter.getInstance() as express.Express;
    console.log('zzx');
    const vite = await createSsrServer({
      server: { middlewareMode: true },
      appType: 'custom',
      define: {
        aaa: { a: 1 },
      },
    });

    // 安装SSR中间件
    app.use(vite.middlewares);
  }
}
