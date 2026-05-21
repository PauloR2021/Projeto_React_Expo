package com.paulo.ToDoList.Service;

import com.paulo.ToDoList.Dtos.Auth.AuthDTO;
import com.paulo.ToDoList.Entity.Usuario;
import com.paulo.ToDoList.Repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;

    public AuthService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não existente: "+email));
        return usuario;
    }

    public Usuario info(AuthDTO dados){
        Usuario usuario = usuarioRepository.findByEmail(dados.email())
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não existe"));


        return usuario;
    }
}
