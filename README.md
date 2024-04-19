## Stripe Payment

Stripe DOCS: https://docs.stripe.com/payments/quickstart
Payments Dashboard: https://dashboard.stripe.com/test/payments?status[0]=successful

1. PaymentIntents API: 这是一种用于处理付款的 API，特别是对于需要对客户进行身份验证或需要 3D 安全的支付。PaymentIntents API 支持多种支付方式，包括信用卡、银行转账、Alipay 等。

2. Checkout: 这是一种用于简化付款流程的工具，通过 Checkout，您可以轻松地集成 Stripe 的支付功能到您的网站上。它提供了一个简单的支付表单，可用于接受信用卡等支付方式。

3. Subscriptions: Stripe 的订阅功能允许您创建和管理定期收费的订阅服务。通过订阅，您可以轻松地实现各种付费模式，如按月订阅、按年订阅等。Stripe 提供了 Subscription API，使您可以在应用程序中创建、更新和取消订阅，以及管理与订阅相关的计费周期和发票。

4. Stripe-hosted page:

在这种方式中，您将用户重定向到由 Stripe 托管的支付页面，用户在该页面上输入支付信息并完成支付。
这种方式适用于不想处理敏感支付信息（如信用卡号）的商家，因为所有支付信息都由 Stripe 安全地处理。
Stripe-hosted page 提供了最简单的集成方式，因为您只需要将用户重定向到 Stripe 提供的页面即可。

2. Embedded form:

在这种方式中，您可以在您自己的网站上嵌入一个 Stripe 提供的支付表单。
用户可以在您的网站上直接填写支付信息，而无需重定向到外部页面。
这种方式提供了比 Stripe-hosted page 更好的用户体验，因为用户可以在您的网站上完成整个支付流程。

3. Custom payment flow:

这种方式涉及使用 Stripe API 来构建完全自定义的支付流程。
您可以使用 Stripe API 来创建自定义的支付表单、处理支付信息和与 Stripe 进行通信。
这种方式提供了最大的灵活性和自定义性，但也需要更多的开发工作来实现。

## Client Side

- checkout api
  当收到一个 POST 请求到路径/api/create-checkout-session 时，Express 将执行这个处理程序。
  从请求的 req.body 中解构出 products，这个属性应该是之前前端发送过来的包含了购买产品信息的对象。
  然后，将 products 数组映射为 lineItems 数组。每个 lineItem 对象都代表了购物车中的一个产品，其中包含了产品的价格、名称、图片等信息。
  使用 Stripe 的 checkout.sessions.create 方法创建一个结账会话，传入所需的参数：支付方式、产品信息、支付模式、成功跳转的 URL 和取消跳转的 URL 等。
  最后，将创建的会话的 ID 作为 JSON 响应返回给客户端。

### CartDetails

- Checkout Button
  makePayment()
  1. 使用 loadStripe 函数加载 Stripe 库，该函数返回一个 Promise，因此使用 await 等待加载完成。
  2. 构建请求体 body，其中包含要购买的产品信息，是来自购物车的数据。
  3. 设置请求头 headers，指定 Content-Type 为 application/json。
  4. 使用 fetch 函数向服务器端发送 POST 请求，将购买信息发送至 http://localhost:8080/api/create-checkout-session，并等待服务器的响应。
  5. 解析响应的 JSON 数据，获取包含会话 ID 的 session 对象。
  6. 使用 Stripe 的 redirectToCheckout 函数，传入会话 ID，将用户重定向至 Stripe 的结账页面，以完成支付流程。

## Server Side

- app
  checkout api
  1. 当收到一个 POST 请求到路径/api/create-checkout-session 时，Express 将执行这个处理程序。
  2. 从请求的 req.body 中解构出 products，这个属性应该是之前前端发送过来的包含了购买产品信息的对象。
  3. 然后，将 products 数组映射为 lineItems 数组。每个 lineItem 对象都代表了购物车中的一个产品，其中包含了产品的价格、名称、图片等信息。
  4. 使用 Stripe 的 checkout.sessions.create 方法创建一个结账会话，传入所需的参数：支付方式、产品信息、支付模式、成功跳转的 URL 和取消跳转的 URL 等。
  5. 最后，将创建的会话的 ID 作为 JSON 响应返回给客户端。

## stripe 连接 azure blob storage

当你需要将图片数据与 Stripe 链接时，通常最好的做法是将图片存储在 Azure Blob Storage 中，然后在数据库（比如 Azure SQL Database）中存储图片的元数据或引用（例如图片的 URL 或 Blob 存储的标识符）。这样做有几个好处：

1. 性能和成本效益： Blob Storage 专门用于存储大型二进制对象（如图片、视频等），它提供了高性能和低成本的存储方案，而且可以轻松扩展。
2. 安全性： 将图片存储在 Blob Storage 中可以使其与你的数据库分离，从而减少数据库的负担和风险。你可以根据需要设置 Blob 存储的访问权限，以确保只有授权的用户可以访问图片。
3. 灵活性： 使用 Blob Storage 存储图片可以更轻松地处理不同大小的文件，并且可以与其他 Azure 服务（如 CDN、Azure Functions 等）更好地集成，从而提供更灵活的解决方案。
