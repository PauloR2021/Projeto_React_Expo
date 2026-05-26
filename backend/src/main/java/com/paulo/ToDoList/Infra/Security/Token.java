package com.paulo.ToDoList.Infra.Security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.paulo.ToDoList.Entity.Usuario;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class Token {

    @Value("${api.security.token.secret}")
    private String secret;

    public void checkToken(String token) {
        if(secret == null || secret.isBlank()){
            throw new IllegalStateException("JWT secret não configurado");
        }
    }

    public String generateToken(Usuario user) {
        try{

            Algorithm algorithm = Algorithm.HMAC256(secret);

            return  JWT.create()
                    .withIssuer("auth-api")
                    .withSubject(user.getEmail())

                    // ✅ Informações extras no token
                    .withClaim("nome", user.getNome())
                    .withClaim("id", user.getId())
                    .withClaim("email",user.getEmail())

                    .withExpiresAt(Instant.now().plusSeconds(7200))
                    .sign(algorithm);

        }catch (Exception e){
            throw new RuntimeException("Erro ao gerar token JWT - ERRO: "+e.getMessage());
        }
    }

    public String validateToken(String token) {
        try {
            DecodedJWT decoded = JWT.require(Algorithm.HMAC256(secret))
                    .withIssuer("auth-api")
                    .build()
                    .verify(token);

            String email = decoded.getSubject();
            String nome = decoded.getClaim("nome").asString();
            Long id = decoded.getClaim("id").asLong();

            return email;

        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Token inválido ou expirado");
        }
    }
}
