
import { UserManager } from '@modules/users/domain/managers/user.manager';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userManager: UserManager, private jwtService: JwtService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userManager.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
