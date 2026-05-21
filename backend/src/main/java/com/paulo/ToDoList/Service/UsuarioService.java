package com.paulo.ToDoList.Service;

import com.paulo.ToDoList.Dtos.RequestUsuario;
import com.paulo.ToDoList.Dtos.ResponseUsuario;
import com.paulo.ToDoList.Entity.Usuario;
import com.paulo.ToDoList.Repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    private final UsuarioRepository  usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }



    @Transactional
    public ResponseUsuario save(RequestUsuario request) {
        Usuario usuario = new Usuario();

        if(usuarioRepository.existsByEmail(request.email())){
            throw new RuntimeException("Email já cadastrado");
        }
        usuario.setNome(request.nome());
        usuario.setEmail(request.email());
        usuario.setPassword(passwordEncoder.encode(request.password()));

        Usuario saved = usuarioRepository.save(usuario);

        return toResponse(saved);

    }


    private ResponseUsuario toResponse (Usuario usuario){
        return new ResponseUsuario(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getPassword()
        );
    }
}
