# NestJS Learning Path 🚀

## Introduction
This repository serves as a structured learning path for frontend developers transitioning to backend development with NestJS. The project is designed to provide hands-on experience with NestJS, Prisma, and modern backend development practices.

## Prerequisites
- Node.js (v18 or later)
- TypeScript knowledge
- Basic understanding of REST APIs
- Basic understanding of databases
- npm or yarn package manager

## Project Structure
```
src/
├── auth/           # Authentication & authorization
├── common/         # Shared utilities, decorators, and middleware
├── config/         # Configuration files and environment setup
├── modules/        # Feature modules (users, posts, etc.)
├── prisma/         # Prisma schema and migrations
└── tests/          # Test files
```

## Learning Path 📚

### Phase 1: NestJS Fundamentals (Week 1-2)
- [x] Project setup and structure
- [ ] Understanding modules, controllers, and services
- [ ] Dependency Injection in NestJS
- [ ] Building REST APIs
- [ ] Request validation with DTOs
- [ ] Error handling and exceptions

### Phase 2: Database Integration (Week 2-3)
- [ ] Setting up Prisma
- [ ] Database modeling
- [ ] CRUD operations
- [ ] Relationships
- [ ] Migrations
- [ ] Transaction handling

### Phase 3: Authentication & Authorization (Week 3-4)
- [ ] JWT implementation
- [ ] Guards and strategies
- [ ] Role-based access control
- [ ] Password hashing
- [ ] Session management

### Phase 4: Advanced Features (Week 4-5)
- [ ] Custom decorators
- [ ] Interceptors
- [ ] Middleware
- [ ] Exception filters
- [ ] Pipes and validation
- [ ] Caching strategies

### Phase 5: Testing & Documentation (Week 5-6)
- [ ] Unit testing with Jest
- [ ] E2E testing
- [ ] Integration testing
- [ ] Swagger documentation
- [ ] API versioning

### Phase 6: Production Ready (Week 6-7)
- [ ] Environment configuration
- [ ] Logging and monitoring
- [ ] Performance optimization
- [ ] Security best practices
- [ ] Deployment strategies

## Projects to Build 🛠️

1. **Basic Blog API** (Phase 1-2)
   - CRUD operations
   - Data validation
   - Basic error handling
   - Database integration

2. **Authentication System** (Phase 3)
   - User registration/login
   - JWT authentication
   - Password reset
   - Email verification

3. **E-commerce API** (Phase 4-5)
   - Product management
   - Order processing
   - Cart functionality
   - Payment integration
   - Advanced error handling
   - Complete testing suite

4. **Real-time Chat Application** (Phase 6)
   - WebSocket integration
   - Real-time messaging
   - User presence
   - Message persistence
   - Production deployment

## Getting Started 🚀

1. Clone this repository:
```bash
git clone <repository-url>
cd nest
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run start:dev
```

## Development Guidelines 📝

1. **Code Structure**
   - Follow NestJS best practices
   - Use meaningful names for files and folders
   - Keep modules focused and single-responsibility
   - Document complex logic

2. **Testing**
   - Write tests for all new features
   - Maintain test coverage above 80%
   - Use meaningful test descriptions

3. **Git Workflow**
   - Use feature branches
   - Write meaningful commit messages
   - Follow conventional commits
   - Create detailed PR descriptions

## Resources 📚

### Official Documentation
- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Recommended Reading
- [NestJS in Action](https://www.manning.com/books/nestjs-in-action)
- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Domain-Driven Design](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

### Video Resources
- [NestJS Crash Course](https://www.youtube.com/watch?v=wqhNoDE6pb4)
- [Prisma Course](https://www.youtube.com/watch?v=RebA5J-rlwg)

## Contributing 🤝

Feel free to contribute to this learning path by:
1. Forking the repository
2. Creating your feature branch
3. Committing your changes
4. Pushing to the branch
5. Creating a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
