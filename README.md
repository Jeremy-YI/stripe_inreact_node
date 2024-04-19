## Stripe Payment

https://docs.stripe.com/payments/quickstart

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

## stripe 连接 azure blob storage

当你需要将图片数据与 Stripe 链接时，通常最好的做法是将图片存储在 Azure Blob Storage 中，然后在数据库（比如 Azure SQL Database）中存储图片的元数据或引用（例如图片的 URL 或 Blob 存储的标识符）。这样做有几个好处：

性能和成本效益： Blob Storage 专门用于存储大型二进制对象（如图片、视频等），它提供了高性能和低成本的存储方案，而且可以轻松扩展。
安全性： 将图片存储在 Blob Storage 中可以使其与你的数据库分离，从而减少数据库的负担和风险。你可以根据需要设置 Blob 存储的访问权限，以确保只有授权的用户可以访问图片。
灵活性： 使用 Blob Storage 存储图片可以更轻松地处理不同大小的文件，并且可以与其他 Azure 服务（如 CDN、Azure Functions 等）更好地集成，从而提供更灵活的解决方案。
所以，当你需要在 Stripe 中使用图片数据时，可以将图片存储在 Azure Blob Storage 中，并在数据库中存储对应的引用或元数据。这样可以实现更好的性能、安全性和灵活性

## Client

### CartDetails

- Checkout Button
- makePayment()
