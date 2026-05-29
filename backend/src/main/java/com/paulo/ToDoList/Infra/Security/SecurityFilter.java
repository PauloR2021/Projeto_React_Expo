package com.paulo.ToDoList.Infra.Security;

import com.paulo.ToDoList.Repository.UsuarioRepository;
import com.paulo.ToDoList.Service.UsuarioService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    private final Token tokenService;
    private final UsuarioRepository usuarioRepository;

    public SecurityFilter(Token tokenService, UsuarioRepository usuarioRepository) {
        this.tokenService = tokenService;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException
    {
        String token = recoverToken(request);

        System.out.println("=== SecurityFilter ===");
        System.out.println("URL: " + request.getRequestURI());
        System.out.println("Token recebido: " + token);

        if(token != null) {
            String email = tokenService.validateToken(token);
            System.out.println("Email validado: " + email);

            if(email != null) {
                usuarioRepository.findByEmail(email).ifPresent(user -> {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                            new UsernamePasswordAuthenticationToken(user, null,user.getAuthorities());

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                });
            }
        }
        filterChain.doFilter(request, response);


    }


    private String recoverToken(HttpServletRequest request){
        String authHeader = request.getHeader("Authorization");

        // ✅ Log para ver o que está chegando
        System.out.println("Authorization header: " + authHeader);

        if(authHeader == null || !authHeader.startsWith("Bearer ")) return null;
        return authHeader.substring(7).trim(); // remove "Bearer " e espaços extras
    }


}
